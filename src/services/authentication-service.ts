import QueryString from "qs";
import { CredentialsDTO } from "../models/authentication";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosPromise, AxiosRequestConfig } from "axios";
import { requestBackend } from "./request";
import * as accessTokenRepository from '../localStorage/access-token-repository';

const encryptedString = window.btoa(CLIENT_ID + ":" + CLIENT_SECRET);

export function loginRequest(loginData: CredentialsDTO) : AxiosPromise {
    // cabeçalho da requisição
    const requestHeaders = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + encryptedString

    }

    const requestBody =
        // convertendo o json para x-www-form-urlencoded
        QueryString.stringify(
            // adicionar o grant_type ao objeto desestruturado que chegar no corpo da requisição
            {
                ...loginData,
                grant_type: "password"
            });

    const configuration: AxiosRequestConfig = {
        method: 'POST',
        url: "/oauth/token",
        data: requestBody,
        headers: requestHeaders
    };

    return requestBackend(configuration);
    //console.log(requestHeaders);
    //console.log(loginData);
    //console.log(requestBody);
}

export function saveAccessToken(token : string) : void {
    accessTokenRepository.saveToken(token);
}

export function getAccessToken() : void {
    accessTokenRepository.getToken();
}

// se o usuário não tiver um token salvo no localStorage
// ele não consegue fazer requisições a recursos protegidos (não está logado)
export function logout() : void{
    accessTokenRepository.removeToken();
}

