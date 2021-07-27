<template>
  <b-container fluid>
    <h1>Upload page</h1>
    <b-container>
      <div v-if="loadingPilotList">
        Please wait while pilot list is loading ...
        <b-spinner type="grow" label="Spinning"></b-spinner>
      </div>
      <div v-if="!loadingPilotList">
        <!-- Pilot selection. -->
        <b-card bg-variant="light" title="Pilot selection">
          <b-container>
            <b-row>
              <b-col>
                <b-form>
                  <label class="mr-sm-2" for="event-group-select">Pilot:</label>
                  <b-form-select id="event-group-select" class="mb-2 mr-sm-2 mb-sm-0" :options="listOfAllPilots" v-model="selectedPilotId" text-field="name" value-field="id" @change="onSelectedPilotChange" size="md"></b-form-select>
                </b-form>
              </b-col>
              <b-col>
                <b-form>
                  <label class="mr-sm-2" for="inline-form-input-password">Password:</label>
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-form-input id="inline-form-input-password" v-model="password"></b-form-input>
                  </b-input-group>
                </b-form>
              </b-col>
            </b-row>
          </b-container>
          <div class="text">
            <b-button variant="primary" @click="AuthenticatePilot(selectedPilotBasicInfo.id, password)" :disabled="IsNullOrEmpty(selectedPilotBasicInfo.id)">Open upload section</b-button>
          </div>
        </b-card>

        <div class="text" v-if="selectedPilotAuthenticated">
          <!-- Pilot Details. -->
          <h2>Upload signed application form</h2>
          <b-row v-if="IsNullOrEmpty(selectedPilot.signedApplicationFile)">
            <b-col md="6" class="mb-3">
              <b-input-group>
                <b-form-file v-model="file" placeholder="Choose file"></b-form-file>
                <b-input-group-append>
                  <b-button variant="primary" class="mb-2 mr-sm-2 mb-sm-0" @click="OnFileUpload()">Upload</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-col>
          </b-row>
          <div class="text" v-else>
            Nothing to do, you already uploaded. Thank you!
          </div>
        </div>
      </div>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { FileApi, PilotApi } from "@/../api-axios/api";
import ServiceHelper from "@/service/ServiceHelper";
import { BasicInfoDTO, EditPilotDTO, PilotDTO } from "api-axios/model";

export default Vue.extend({
  data() {
    return {
      // Parameters & variables.
      loadingPilotList: true,
      errorMessage: "",
      selectedPilot: {} as PilotDTO,
      selectedPilotId: 0,
      selectedPilotBasicInfo: {} as BasicInfoDTO,
      selectedPilotAuthenticated: false,
      password: "",
      file: null,
      fileId: 0,
      checkedDataStatus: false,
      submitting: false,

      // APIs.
      pilotApi: {} as PilotApi,
      fileApi: {} as FileApi,

      // Lists of entities.
      listOfAllPilots: [] as Array<BasicInfoDTO>
    }
  },

  created() {
    // APIs.
    this.pilotApi = new PilotApi(store.getters.apiConfiguration.getApiConfiguration);
    this.fileApi = new FileApi(store.getters.apiConfiguration.getApiConfiguration);

    // Actions.
    this.loadAllPilots()
  },

  methods: {
    /**
     * Is null or empty.
     */
    // eslint-disable-next-line
    IsNullOrEmpty(obj: any): boolean {
      return ServiceHelper.IsNullOrEmpty(obj);
    },

    async OnFileUpload() {
      // Upload file.
      await this.UploadFile(this.selectedPilot.id as number, this.file);
      // Update pilot.
      await this.UpdatePilot();
    },

    /**
     * Upload file.
     */
    // eslint-disable-next-line
    async UploadFile(pilotId: number, file: any) {
      try {
        const response = await this.fileApi.apiFilePost(pilotId, file);

        if (ServiceHelper.CheckResponseStatusCode(response.status)) {
          let uploadedFile = response.data;
          const errTitle = "Uploading successful.";
          this.errorMessage = "File upload was successful.";
          this.$bvToast.toast(this.errorMessage, {
            title: errTitle,
            variant: 'success',
            solid: true,
            autoHideDelay: 5000
          })
          console.log("Uploaded file details.");
          
          console.log(uploadedFile);
          this.fileId = uploadedFile.id != null ? uploadedFile.id : 0;
        } else {
          const msg = `Failed response with status ${response.status}: ${response.data}.`;
          throw new Error(msg);
        }
      } catch (error) {
        const errTitle = "An error has occurred.";
        const errorDetails = ServiceHelper.GetErrorMessageFromApiError(error);
        this.errorMessage = errorDetails.Message || "Unexpected error occured.";
        this.$bvToast.toast(this.errorMessage, {
          title: errTitle,
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000
        })
      }
    },

    /**
     * Pilot authentication.
     */
    async AuthenticatePilot(pilotId: number, pass: string) {
      try {
        this.selectedPilotAuthenticated = false;
        const response = await this.pilotApi.apiPilotAuthenticatePilotGet(pilotId, pass);
        this.selectedPilotAuthenticated = true;

        // Filter event groups..
        if (ServiceHelper.CheckResponseStatusCode(response.status)) {
          this.selectedPilot = response.data;
        } else {
          const msg = `Failed response with status ${response.status}: ${response.data}.`;
          throw new Error(msg);
        }
      } catch (error) {
        this.selectedPilotAuthenticated = false;
        const errTitle = "An error has occurred.";
        const errorDetails = "Probably wrong password.";
        this.errorMessage = errorDetails || "Unexpected error occured.";
        this.$bvToast.toast(this.errorMessage, {
          title: errTitle,
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000
        })
      }
    },

    /**
     * Load all pilots.
     */
    async loadAllPilots() {
      try {
        this.loadingPilotList = true;
        const response = await this.pilotApi.apiPilotGetPilotsBasicInfoGet();
        this.loadingPilotList = false;

        // Filter event groups..
        if (ServiceHelper.CheckResponseStatusCode(response.status)) {
          this.listOfAllPilots = response.data.sort((a, b) => ((a.name as string) < (b.name as string) ? -1 : 1));
        } else {
          const msg = `Failed response with status ${response.status}: ${response.data}.`;
          throw new Error(msg);
        }
      } catch (error) {
        this.loadingPilotList = false;
        const errTitle = "An error has occurred while loading all pilots.";
        const errorDetails = ServiceHelper.GetErrorMessageFromApiError(error);
        this.errorMessage = errorDetails.Message || "Unexpected error occured.";
        this.$bvToast.toast(this.errorMessage, {
          title: errTitle,
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000
        })
      }
    },

    /**
     * Edit pilot.
     */
    async UpdatePilot() {
      try {
        const editPilot = {
          id: this.selectedPilot.id,
          eventId: this.selectedPilot.event?.id,
          female: this.selectedPilot.female,
          licence: this.selectedPilot.licence,
          fai: this.selectedPilot.fai,
          civlid: this.selectedPilot.civlid,
          birthDate: this.selectedPilot.birthDate,
          mobilePhone: this.selectedPilot.mobilePhone,
          address: this.selectedPilot.address,
          flyingSince: this.IsNullOrEmpty(this.selectedPilot?.flyingSince) ? null : this.selectedPilot.flyingSince,
          team: this.selectedPilot.team,
          nation: this.selectedPilot.nation,
          glider: this.selectedPilot.glider,
          safetyClass: this.selectedPilot.safetyClass,
          gliderColor: this.selectedPilot.gliderColor,
          insuranceCompany: this.selectedPilot.insuranceCompany,
          policyNumber: this.selectedPilot.policyNumber,
          ippifileId: this.selectedPilot.ippifile?.id,
          licenceFileId: this.selectedPilot.licenceFile?.id,
          checkFileId: this.selectedPilot.checkFile?.id,
          signedApplicationFileId: this.IsNullOrEmpty(this.fileId) ? null : this.fileId,
          unSignedApplicationFileId: this.selectedPilot.unSignedApplicationFile?.id,
          sponsors: this.selectedPilot.sponsors,
          email: this.selectedPilot.email,
          firstName: this.selectedPilot.firstName,
          lastName: this.selectedPilot.lastName
        } as EditPilotDTO;

        console.log(editPilot);
        console.log(this.selectedPilot);
        const response = await this.pilotApi.apiPilotIdPut(this.selectedPilot.id as number, editPilot);

        if (ServiceHelper.CheckResponseStatusCode(response.status)) {
          const errTitle = "Updating successful.";
          this.errorMessage = "Pilot update was successful.";
          this.$bvToast.toast(this.errorMessage, {
            title: errTitle,
            variant: 'success',
            solid: true,
            autoHideDelay: 5000
          })
        } else {
          const msg = `Failed response with status ${response.status}: ${response.data}.`;
          throw new Error(msg);
        }
      } catch (error) {
        const errTitle = "An error has occurred.";
        const errorDetails = ServiceHelper.GetErrorMessageFromApiError(error);
        this.errorMessage = errorDetails.Message || "Unexpected error occured.";
        this.$bvToast.toast(this.errorMessage, {
          title: errTitle,
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000
        })
      }
    },

    onSelectedPilotChange() {
      this.selectedPilotBasicInfo = this.listOfAllPilots.find(eg => eg.id === this.selectedPilotId) || {} as BasicInfoDTO;
      this.selectedPilotAuthenticated = false;
    }
  }
});
</script>
