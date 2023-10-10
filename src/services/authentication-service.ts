import QueryString from "qs";
import { AccessTokenPayloadDTO, CredentialsDTO } from "../models/authentication";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosPromise, AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";
import * as accessTokenRepository from '../localStorage/access-token-repository';
import jwtDecode from "jwt-decode";

const encryptedString = window.btoa(CLIENT_ID + ":" + CLIENT_SECRET);

export function loginRequest(loginData: CredentialsDTO): AxiosPromise {
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

export function saveAccessToken(token: string): void {
    accessTokenRepository.saveToken(token);
}

export function getAccessToken(): string | null | undefined {
    return accessTokenRepository.getToken();
}

// se o usuário não tiver um token salvo no localStorage
// ele não consegue fazer requisições a recursos protegidos (não está logado)
export function logout(): void {
    accessTokenRepository.removeToken();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
    try {
        const accessToken = accessTokenRepository.getToken();
        if (accessToken == null) {
            return undefined;
        } else {
            return (jwtDecode(accessToken) as AccessTokenPayloadDTO);
        }
    } catch (error) {
        return undefined;
    }
}

// testar se o usuário está autenticado
export const userIsAuthenticated = (): boolean => {
    // verificar se a data do token não expirou // - tempo do token tem que ser maior que o date.now()
    // instante do token ainda não chegou instante da data de agora

    const instantNow = Date.now();    
    const instantTokenPayload = getAccessTokenPayload().exp * 1000;
    if (instantTokenPayload > instantNow) {
        return true; // ainda não experiou o token e usuário está autenticado
    } else {
        return false;
    }






}



