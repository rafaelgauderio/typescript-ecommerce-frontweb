import { requestBackend } from "../utils/request";
import { AxiosPromise, AxiosRequestConfig} from "axios";


export function findUser() : AxiosPromise {

    const configuration: AxiosRequestConfig = {
        url: "/users/me",
        withCredentials: true
    }

    return requestBackend(configuration);
}