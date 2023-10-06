import QueryString from "qs";
import { CredentialsDTO } from "../models/authentication";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";

const encryptedString = window.btoa(CLIENT_ID + ":" + CLIENT_SECRET);

export function loginRequest(loginData: CredentialsDTO) {
    // cabeçalho da requisição
    const headers = {
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
            })

    console.log(headers);
    console.log(loginData);
    console.log(requestBody);

}