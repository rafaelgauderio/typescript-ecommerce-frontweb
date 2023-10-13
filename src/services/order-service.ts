import { AxiosPromise, AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";

export function findOrderByIdRequest(id: number): AxiosPromise {

    const configuration: AxiosRequestConfig = {
        method: 'GET',
        url: `/orders/${id}`,
        withCredentials: true
    }

    return requestBackend(configuration);
}