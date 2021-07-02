<template>
  <b-container fluid>
    <h1>Application form</h1>
    <b-container>
      <div v-if="loadingPilotList">
        Please wait while pilot list is loading ...
        <b-spinner type="grow" label="Spinning"></b-spinner>
      </div>
      <div v-if="!loadingPilotList">
        <!-- Pilot slection. -->
        <b-row>
          <b-col>
            <b-form inline>
              <label class="mr-sm-2" for="event-group-select">Select pilot:</label>
              <b-form-select id="event-group-select" class="mb-2 mr-sm-2 mb-sm-0" :options="listOfAllPilots" v-model="selectedPilot.id" text-field="name" value-field="id" @change="onSelectedPilotChange"></b-form-select>
            </b-form>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { PilotApi } from "@/../api-axios/api";
import ServiceHelper from "@/service/ServiceHelper";
import { BasicInfoDTO } from "api-axios/model";
// import ServiceHelper from '@/helpers/ServiceHelper';

export default Vue.extend({
  data() {
    return {
      // Parameters & variables.
      loadingPilotList: true,
      errorMessage: "",
      selectedPilot: {} as BasicInfoDTO,
      // APIs.
      pilotApi: {} as PilotApi,

      // Lists of entities.
      listOfAllPilots: [] as Array<BasicInfoDTO>
    }
  },

  components: {
  },

  created() {
    // APIs.
    this.pilotApi = new PilotApi(store.getters.apiConfiguration.getApiConfiguration);

    // Actions.
    this.loadAllPilots()
  },

  computed: {
  },

  methods: {
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
      this.selectedPilot = this.listOfAllPilots.find(eg => eg.id === this.selectedPilot.id) || {} as BasicInfoDTO;
    }
  }
});
</script>
