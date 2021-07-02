/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/prefer-as-const */
import { defineModule } from "direct-vuex";
import { Configuration } from "@/../api-axios/configuration"

const apiConfigurationModule = defineModule({
  namespaced: true as true,
  getters: {
    getApiConfiguration: () => {
      const apiConfig = new Configuration({
        basePath: process.env.VUE_APP_BASE_API_URL,
      });

      return apiConfig;
    }
  }
});

export default apiConfigurationModule;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
