import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";

export function findOrderByIdRequest(id: number)  {

    const configuration: AxiosRequestConfig = {
        method: 'GET',
        url: `/orders/${id}`,
        withCredentials: true
    }

    return requestBackend(configuration);
}