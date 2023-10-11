// arquivo para auxiliar fazer requisicoes ao backend
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import * as authenticationService from '../services/authentication-service';
import {history} from "./browser-history";


export function requestBackend(configuration: AxiosRequestConfig) {

    let authorizationHeaders = configuration.headers;

    // se a requisição precisar de autenticação, pega o que já estiver no cabecaçho e adiciona
    // o cabeçalho de autorização
    if (configuration.withCredentials === true) {

        authorizationHeaders =
        {
            ...configuration.headers,
            Authorization: "Bearer" + authenticationService.getAccessToken()
        }
    } else {
        configuration.headers;
    }

    return axios({
        ...configuration,
        baseURL: BASE_URL,
        headers: authorizationHeaders
    });
}

// request interceptor
axios.interceptors.request.use(
    function (request) {
        return request;
    },
    function (requestError) {
        return Promise.reject(requestError)
    }
);

// response interceptor
axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (responseError) {
        if(responseError.response.status===401) {
            console.log("Error 401, unauthorized!");
            // redirecionando para a página de login porque não está logado com nenhum tipo de perfil
            history.push("/login");
        }
        if(responseError.response.status===403) {
            console.log("Error 403, forbidden");
            // redirecionado para página de catálogo, porque o perfil de login não tem a permissão necessária
            history.push("/product-catalog");
        }
        return Promise.reject(responseError);
    }
);