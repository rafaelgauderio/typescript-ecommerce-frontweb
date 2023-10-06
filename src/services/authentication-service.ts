import QueryString from "qs";
import { CredentialsDTO } from "../models/authentication";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "./request";

const encryptedString = window.btoa(CLIENT_ID + ":" + CLIENT_SECRET);

export function loginRequest(loginData: CredentialsDTO) {
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