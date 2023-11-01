import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";

export function findAllPageRequest(pagina: number, nome: string, tamanho = 12, ordem = "name") {
    const configuration: AxiosRequestConfig = {
        method: "GET",
        url: "/products",
        params: {
            page: pagina,
            name: nome,
            size: tamanho,
            sort: ordem

        }
    }

    return requestBackend(configuration);
    //return axios(configuration);
    //return axios.get(`${BASE_URL}/products?size=12`);
}

export function findProductById(id: number) {
    //return axios.get(`${BASE_URL}/products/${id}`);
    return requestBackend({ url: `/products/${id}` });
}

export function deleteProductById(id: number) {
    const configuration: AxiosRequestConfig = {
        method: "DELETE",
        url: `/products/${id}`,
        withCredentials: true
    }
    return requestBackend(configuration);
}

