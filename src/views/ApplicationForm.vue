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
          <h2>Pilot details</h2>
          <b-row class="mb-3">
            <b-col>
              <b-input-group prepend="First name">
                <b-form-input v-model="selectedPilot.firstName"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col>
              <b-input-group prepend="Last name">
                <b-form-input v-model="selectedPilot.lastName"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col>
              <b-input-group prepend="First name">
                <b-form-input v-model="selectedPilot.firstName"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col>
              <b-input-group prepend="Last name">
                <b-form-input v-model="selectedPilot.lastName"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col>
              <b-input-group prepend="Brithday">
                <b-form-datepicker v-model="selectedPilot.birthDate"></b-form-datepicker>
              </b-input-group>
            </b-col>
            <b-col>
              <b-button-group size="sm">
                <b-button @click="selectedPilot.female = !selectedPilot.female" :variant="SetGenderButtonColor(selectedPilot.female)">Female
                </b-button>
                <b-button @click="selectedPilot.female = !selectedPilot.female" :variant="SetGenderButtonColor(!selectedPilot.female)">Male
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col>
              <b-input-group prepend="Adress">
                <b-form-input v-model="selectedPilot.adress"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col>
              <b-input-group prepend="Nation">
                <b-form-input v-model="selectedPilot.nation"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>

          <h2>Flying</h2>
          <b-row class="mb-3">
            <b-col>
              <b-input-group prepend="National licence">
                <b-form-input v-model="selectedPilot.licence"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col>
              <b-input-group prepend="Flying since">
                <b-form-input v-model="selectedPilot.flyingSince"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col>
              <b-input-group prepend="CIVL id">
                <b-form-input v-model="selectedPilot.civlid"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col>
              <b-input-group prepend="Fai number">
                <b-form-input v-model="selectedPilot.fai"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>

          <h3>Equipment details</h3>
          <b-row class="mb-3">
            <b-col>
              <b-input-group prepend="Glider">
                <b-form-input v-model="selectedPilot.glider"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col>
              <b-input-group prepend="Glider color">
                <b-form-input v-model="selectedPilot.gliderColor"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col sm="6">
              <b-input-group prepend="Safety class">
                <b-form-input v-model="selectedPilot.safetyClass"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { PilotApi } from "@/../api-axios/api";
import ServiceHelper from "@/service/ServiceHelper";
import { BasicInfoDTO, PilotDTO } from "api-axios/model";
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
      // APIs.
      pilotApi: {} as PilotApi,

      // Lists of entities.
      listOfAllPilots: [] as Array<BasicInfoDTO>
    }
  },

  created() {
    // APIs.
    this.pilotApi = new PilotApi(store.getters.apiConfiguration.getApiConfiguration);

    // Actions.
    this.loadAllPilots()
  },

  methods: {
    /**
     * Set button color.
     */
    SetGenderButtonColor(isSelected: boolean): string {
      return isSelected ? "primary" : "outline-primary"
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
        console.log(error);
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
          this.listOfAllPilots = response.data;
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
    }
  }
});
</script>
