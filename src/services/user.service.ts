import { requestBackend } from "./request";
import * as authenticationService from '../services/authentication-service';

const authorizationHeader = {
    Authorization: "Bearer" + authenticationService.getAccessToken()
}

export function findUser() {
    return requestBackend({
        url: "/users/me",
        headers: authorizationHeader        
    });
}