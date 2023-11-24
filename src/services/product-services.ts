import { AxiosPromise, AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";
import { ProductDTO } from "../models/product";

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

export function updateProductById(productObject: ProductDTO): AxiosPromise {
    const configuration: AxiosRequestConfig = {
        method: "PUT",
        url: `/products/${productObject.id}`,
        withCredentials: true,
        data: productObject
    }
    return requestBackend(configuration);
}

export function inserNewProduct(productObject: ProductDTO): AxiosPromise {
    const configuration: AxiosRequestConfig = {
        method: "POST",
        url: "/products",
        withCredentials: true,
        data: productObject
    }
    return requestBackend(configuration)
}
