// arquivo para auxiliar fazer requisicoes ao backend

import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

export function requestBackend(configuration: AxiosRequestConfig) {

    return axios({
        ...configuration,
        baseURL: BASE_URL
    });
}