/* tslint:disable */
/* eslint-disable */
/**
 * Metuljmania API
 * Metuljmania ASP.NET Core Web API.
 *
 * The version of the OpenAPI document: v1
 * Contact: mitjajancic@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BasicInfoDTO } from '../model';
// @ts-ignore
import { EditPilotDTO } from '../model';
// @ts-ignore
import { NewPilotDTO } from '../model';
// @ts-ignore
import { PilotDTO } from '../model';
/**
 * PilotApi - axios parameter creator
 * @export
 */
export const PilotApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [id] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotAuthenticatePilotGet: async (id?: number, password?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Pilot/AuthenticatePilot`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (password !== undefined) {
                localVarQueryParameter['password'] = password;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [pilotId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotCreateApplicationFormAsyncPost: async (pilotId?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Pilot/CreateApplicationFormAsync`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pilotId !== undefined) {
                localVarQueryParameter['pilotId'] = pilotId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotGetPilotsBasicInfoGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Pilot/GetPilotsBasicInfo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotIdGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiPilotIdGet', 'id', id)
            const localVarPath = `/api/Pilot/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {EditPilotDTO} [editPilotDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotIdPut: async (id: number, editPilotDTO?: EditPilotDTO, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiPilotIdPut', 'id', id)
            const localVarPath = `/api/Pilot/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(editPilotDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {NewPilotDTO} [newPilotDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotPost: async (newPilotDTO?: NewPilotDTO, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Pilot`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(newPilotDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [eventId] 
         * @param {any} [fsdbFile] 
         * @param {any} [csvFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotPostPilotsAsyncPost: async (eventId?: number, fsdbFile?: any, csvFile?: any, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Pilot/PostPilotsAsync`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            if (eventId !== undefined) {
                localVarQueryParameter['eventId'] = eventId;
            }


            if (fsdbFile !== undefined) { 
                localVarFormParams.append('fsdbFile', fsdbFile as any);
            }
    
            if (csvFile !== undefined) { 
                localVarFormParams.append('csvFile', csvFile as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PilotApi - functional programming interface
 * @export
 */
export const PilotApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PilotApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [id] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPilotAuthenticatePilotGet(id?: number, password?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PilotDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPilotAuthenticatePilotGet(id, password, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [pilotId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPilotCreateApplicationFormAsyncPost(pilotId?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPilotCreateApplicationFormAsyncPost(pilotId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPilotGetPilotsBasicInfoGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BasicInfoDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPilotGetPilotsBasicInfoGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPilotIdGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PilotDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPilotIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {EditPilotDTO} [editPilotDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPilotIdPut(id: number, editPilotDTO?: EditPilotDTO, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPilotIdPut(id, editPilotDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {NewPilotDTO} [newPilotDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPilotPost(newPilotDTO?: NewPilotDTO, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PilotDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPilotPost(newPilotDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [eventId] 
         * @param {any} [fsdbFile] 
         * @param {any} [csvFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPilotPostPilotsAsyncPost(eventId?: number, fsdbFile?: any, csvFile?: any, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPilotPostPilotsAsyncPost(eventId, fsdbFile, csvFile, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PilotApi - factory interface
 * @export
 */
export const PilotApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PilotApiFp(configuration)
    return {
        /**
         * 
         * @param {number} [id] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotAuthenticatePilotGet(id?: number, password?: string, options?: any): AxiosPromise<PilotDTO> {
            return localVarFp.apiPilotAuthenticatePilotGet(id, password, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [pilotId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotCreateApplicationFormAsyncPost(pilotId?: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiPilotCreateApplicationFormAsyncPost(pilotId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotGetPilotsBasicInfoGet(options?: any): AxiosPromise<Array<BasicInfoDTO>> {
            return localVarFp.apiPilotGetPilotsBasicInfoGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotIdGet(id: number, options?: any): AxiosPromise<PilotDTO> {
            return localVarFp.apiPilotIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {EditPilotDTO} [editPilotDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotIdPut(id: number, editPilotDTO?: EditPilotDTO, options?: any): AxiosPromise<void> {
            return localVarFp.apiPilotIdPut(id, editPilotDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {NewPilotDTO} [newPilotDTO] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotPost(newPilotDTO?: NewPilotDTO, options?: any): AxiosPromise<PilotDTO> {
            return localVarFp.apiPilotPost(newPilotDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [eventId] 
         * @param {any} [fsdbFile] 
         * @param {any} [csvFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPilotPostPilotsAsyncPost(eventId?: number, fsdbFile?: any, csvFile?: any, options?: any): AxiosPromise<void> {
            return localVarFp.apiPilotPostPilotsAsyncPost(eventId, fsdbFile, csvFile, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PilotApi - object-oriented interface
 * @export
 * @class PilotApi
 * @extends {BaseAPI}
 */
export class PilotApi extends BaseAPI {
    /**
     * 
     * @param {number} [id] 
     * @param {string} [password] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PilotApi
     */
    public apiPilotAuthenticatePilotGet(id?: number, password?: string, options?: any) {
        return PilotApiFp(this.configuration).apiPilotAuthenticatePilotGet(id, password, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [pilotId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PilotApi
     */
    public apiPilotCreateApplicationFormAsyncPost(pilotId?: number, options?: any) {
        return PilotApiFp(this.configuration).apiPilotCreateApplicationFormAsyncPost(pilotId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PilotApi
     */
    public apiPilotGetPilotsBasicInfoGet(options?: any) {
        return PilotApiFp(this.configuration).apiPilotGetPilotsBasicInfoGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PilotApi
     */
    public apiPilotIdGet(id: number, options?: any) {
        return PilotApiFp(this.configuration).apiPilotIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {EditPilotDTO} [editPilotDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PilotApi
     */
    public apiPilotIdPut(id: number, editPilotDTO?: EditPilotDTO, options?: any) {
        return PilotApiFp(this.configuration).apiPilotIdPut(id, editPilotDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {NewPilotDTO} [newPilotDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PilotApi
     */
    public apiPilotPost(newPilotDTO?: NewPilotDTO, options?: any) {
        return PilotApiFp(this.configuration).apiPilotPost(newPilotDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [eventId] 
     * @param {any} [fsdbFile] 
     * @param {any} [csvFile] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PilotApi
     */
    public apiPilotPostPilotsAsyncPost(eventId?: number, fsdbFile?: any, csvFile?: any, options?: any) {
        return PilotApiFp(this.configuration).apiPilotPostPilotsAsyncPost(eventId, fsdbFile, csvFile, options).then((request) => request(this.axios, this.basePath));
    }
}
