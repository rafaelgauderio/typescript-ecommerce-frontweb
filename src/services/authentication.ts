import { CredentialsDTO } from "../models/authentication";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";

const encryptedString = window.btoa(CLIENT_ID + ":" + CLIENT_SECRET);

export function loginRequest(loginData: CredentialsDTO) {
    // cabeçalho da requisição
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + encryptedString

    }

    console.log(headers);

}