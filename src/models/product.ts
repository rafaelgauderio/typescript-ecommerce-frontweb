// tipo typescript product
// dto (data transfer object)

import { CategoryDTO } from "./category";

export type ProductDTO = {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    categories: CategoryDTO [];
};