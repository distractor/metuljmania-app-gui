<template>
  <b-container fluid>
    <h1>Application form</h1>
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
                  <b-form-select id="event-group-select" class="mb-2 mr-sm-2 mb-sm-0" :options="listOfAllPilots" v-model="selectedPilotBasicInfo.id" text-field="name" value-field="id" @change="onSelectedPilotChange" size="md"></b-form-select>
                </b-form>
              </b-col>
              <b-col>
                <b-form>
                  <label class="mr-sm-2" for="inline-form-input-password">Password</label>
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <b-form-input id="inline-form-input-password" v-model="password"></b-form-input>
                  </b-input-group>
                </b-form>
              </b-col>
            </b-row>
          </b-container>
          <div class="text">
            <b-button variant="primary" @click="AuthenticatePilot(selectedPilotBasicInfo.id, password)">Get pilot details</b-button>
          </div>
        </b-card>

        <div class="text" v-if="selectedPilotAuthenticated">
          <!-- Pilot Details. -->
          <h2>Pilot details</h2>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="First name">
                <b-form-input v-model="selectedPilot.firstName"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Last name">
                <b-form-input v-model="selectedPilot.lastName"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Brithday">
                <b-form-datepicker v-model="selectedPilot.birthDate"></b-form-datepicker>
              </b-input-group>
            </b-col>
            <b-col md="6" class="mb-3">
              <b-button-group size="sm">
                <b-button @click="selectedPilot.female = !selectedPilot.female" :variant="SetButtonColor(selectedPilot.female)">Female
                </b-button>
                <b-button @click="selectedPilot.female = !selectedPilot.female" :variant="SetButtonColor(!selectedPilot.female)">Male
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Email">
                <b-form-input v-model="selectedPilot.email"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Mobile phone">
                <b-form-input v-model="selectedPilot.mobilePhone"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Address">
                <b-form-input v-model="selectedPilot.address"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Nation">
                <b-form-input v-model="selectedPilot.nation"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>

          <!-- Flying. -->
          <h2>Flying</h2>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="National licence">
                <b-form-input v-model="selectedPilot.licence"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Flying since">
                <b-form-input v-model="selectedPilot.flyingSince"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="CIVL id">
                <b-form-input v-model="selectedPilot.civlid"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="FAI number">
                <b-form-input v-model="selectedPilot.fai"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>

          <h3>Equipment details</h3>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Glider">
                <b-form-input v-model="selectedPilot.glider"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Glider color">
                <b-form-input v-model="selectedPilot.gliderColor"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Safety class">
                <b-form-input v-model="selectedPilot.safetyClass"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>

          <h3>Team and sponsors</h3>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Team">
                <b-form-input v-model="selectedPilot.team"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Sponsors">
                <b-form-input v-model="selectedPilot.sponsors"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>

          <!-- Insurance. -->
          <h2>Insurance details</h2>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Company">
                <b-form-input v-model="selectedPilot.insuranceCompany"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col md="6" class="mb-3">
              <b-input-group prepend="Policy number">
                <b-form-input v-model="selectedPilot.policyNumber"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>

          <!-- Uploaded files. -->
          <h2>Uploaded files</h2>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group v-if="IsNullOrEmpty(selectedPilot.licenceFile)">
                <b-form-file v-model="licenceFile" placeholder="Licence file"></b-form-file>
                <b-input-group-append>
                  <b-button variant="primary" class="mb-2 mr-sm-2 mb-sm-0" @click="UploadLicenceFile()">Upload</b-button>
                </b-input-group-append>
              </b-input-group>
              <div v-else>Licence already uploaded.</div>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group v-if="IsNullOrEmpty(selectedPilot.ippifile)">
                <b-form-file v-model="ippiFile" placeholder="IPPI file"></b-form-file>
                <b-input-group-append>
                  <b-button variant="primary" class="mb-2 mr-sm-2 mb-sm-0" @click="UploadIppiFile()">Upload</b-button>
                </b-input-group-append>
              </b-input-group>
              <div v-else>IPPI card already uploaded.</div>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6" class="mb-3">
              <b-input-group v-if="IsNullOrEmpty(selectedPilot.checkFile)">
                <b-form-file v-model="checkFile" placeholder="Glider check file"></b-form-file>
                <b-input-group-append>
                  <b-button variant="primary" class="mb-2 mr-sm-2 mb-sm-0" @click="UploadCheckFile()">Upload</b-button>
                </b-input-group-append>
              </b-input-group>
              <div v-else>Glider check already uploaded.</div>
            </b-col>
          </b-row>
        </div>
        <!-- Submit data. -->
        <b-card bg-variant="light" title="Submit data" v-if="selectedPilotAuthenticated">
          <b-container>
            <b-card-text>
              <b-form-checkbox v-model="checkedDataStatus" value="true" unchecked-value="false">
                I have checked all my data and corrected it where corrections were needed.
              </b-form-checkbox>
            </b-card-text>
          </b-container>
          <div class="text">
            <b-button variant="primary" :disabled="!checkedDataStatus" v-if="!submitting" @click="SubmitButtonClick()">Submit</b-button>
            <b-button variant="primary" disabled="true" v-else>
              <b-spinner small type="grow"></b-spinner>
              Submitting...
            </b-button>
          </div>
          <b-container>
            <b-card-text>
              After submission, a PDF file with your data will be generated and sent to your email adress. You can use your digital identity to sign it and upload it to the <a href="/upload">upload page</a> or simply make a physical copy and bring it to the registration.
            </b-card-text>
          </b-container>
        </b-card>
      </div>

      <div class="text"></div>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { FileApi, PilotApi } from "@/../api-axios/api";
import ServiceHelper from "@/service/ServiceHelper";
import { BasicInfoDTO, EditPilotDTO, PilotDTO } from "api-axios/model";
// import ServiceHelper from '@/helpers/ServiceHelper';

export default Vue.extend({
  data() {
    return {
      // Parameters & variables.
      loadingPilotList: true,
      errorMessage: "",
      selectedPilot: {} as PilotDTO,
      selectedPilotBasicInfo: {} as BasicInfoDTO,
      selectedPilotAuthenticated: false,
      password: "",
      licenceFile: null,
      ippiFile: null,
      checkFile: null,
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

    /**
     * Set button color.
     */
    SetButtonColor(isSelected: boolean): string {
      return isSelected ? "primary" : "outline-primary"
    },

    /**
     * Upload licence file.
     */
    async UploadLicenceFile() {
      this.selectedPilot.licenceFile = await this.UploadFile(this.selectedPilot.id as number, this.licenceFile);
    },

    /**
     * Upload ippi file.
     */
    async UploadIppiFile() {
      this.selectedPilot.ippifile = await this.UploadFile(this.selectedPilot.id as number, this.ippiFile);
    },

    /**
     * Upload check file.
     */
    async UploadCheckFile() {
      this.selectedPilot.checkFile = await this.UploadFile(this.selectedPilot.id as number, this.checkFile);
    },

    /**
     * Submit button click.
     */
    SubmitButtonClick() {
      this.submitting = true;
      // Post pilot.
      this.EditPilot();
      // Create pdf.
      this.CreateApplicationFormAsync();
      this.submitting = false;
    },

    /**
     * Edit pilot.
     */
    async EditPilot() {
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
          sponsors: this.selectedPilot.sponsors,
          email: this.selectedPilot.email,
          firstName: this.selectedPilot.firstName,
          lastName: this.selectedPilot.lastName
        } as EditPilotDTO;

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

    /**
     * Create application form.
     */
    async CreateApplicationFormAsync() {
      try {
        const response = await this.pilotApi.apiPilotCreateApplicationFormAsyncPost(this.selectedPilot.id);

        if (ServiceHelper.CheckResponseStatusCode(response.status)) {
          const errTitle = "Application form generated.";
          this.errorMessage = "Application form generation was successful. A pdf file has been sent to your email address.";
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

    /**
     * Upload file.
     */
    // eslint-disable-next-line
    async UploadFile(pilotId: number, file: any): Promise<BasicInfoDTO> {
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

          return { id: uploadedFile.id, name: uploadedFile.path } as BasicInfoDTO;
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

        return {} as BasicInfoDTO;
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
        console.log(error);
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

    onSelectedPilotChange() {
      this.selectedPilotBasicInfo = this.listOfAllPilots.find(eg => eg.id === this.selectedPilotBasicInfo.id) || {} as BasicInfoDTO;
      this.selectedPilotAuthenticated = false;
    }
  }
});
</script>
