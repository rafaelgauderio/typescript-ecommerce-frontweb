import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";

export function findAllCategoriesRequest() {
    const configuration: AxiosRequestConfig = {
        method: "GET",
        url: "/categories",
    }

    return requestBackend(configuration);
}