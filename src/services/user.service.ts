import { requestBackend } from "../utils/request";
import { AxiosRequestConfig } from "axios";


export function findUser() {

    const configuration: AxiosRequestConfig = {
        url: "/users/me",
        withCredentials: true
    }

    return requestBackend(configuration);
}