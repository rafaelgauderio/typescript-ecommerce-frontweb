import { AxiosPromise, AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";
import { OrderDTO } from "../models/order";

export function findOrderByIdRequest(id: number): AxiosPromise {

    const configuration: AxiosRequestConfig = {
        method: 'GET',
        url: `/orders/${id}`,
        withCredentials: true
    }

    return requestBackend(configuration);
}

export function registerOrderRequest(order: OrderDTO) {

    const configuration: AxiosRequestConfig = {
        method: 'POST',
        url: '/orders',
        withCredentials: true,
        // no AxiosRequestRonfig o body da requisição se chama data
        data: order,
    }
    return requestBackend(configuration);
}