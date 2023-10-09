// arquivo para auxiliar fazer requisicoes ao backend
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import * as authenticationService from '../services/authentication-service';


export function requestBackend(configuration: AxiosRequestConfig) {    

    let authorizationHeaders = configuration.headers;

    // se a requisição precisar de autenticação, pega o que já estiver no cabecaçho e adiciona
    // o cabeçalho de autorização
    if (configuration.withCredentials===true) {   

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