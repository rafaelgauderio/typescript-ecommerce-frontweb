import SearchBar from '../../../components/SearchBar';
import ProductCatalogCard from '../../../components/ProductCatalogCard';
import './styles.css';
import ButtonShowMore from '../../../components/ButtonShowMore';
import * as productService from "../../../services/product-services";
import { ProductDTO } from '../../../models/product';
import { useEffect, useState } from 'react';

/*
   const objectTest : CategoryDTO = {
       id: 15,
       name: "Tablet"
   }
   */

// quando for mais de um parametro que filtrar a busca, usar um objeto composto
// não criar um useState para cada parâmetro
type QueryParameters = {
    page: number;
    name: string;
}

const ProductCatalog = () => {

    // useState para armazenas o estado dentro do component
    // retorna um list de produtos do backend , valor inicial é uma empty list
    const [products, setProducts] = useState<ProductDTO[]>([]);

    //const [productName, setProductName] = useState<string>("");
    const [queryParameters, setQueryparameters] = useState<QueryParameters>({
        page: 0,
        name: ""
    });

    useEffect(() => {

        // JSON.stringify -> converte de objeto para string
        // JSON.parse     ->  convrtet de string para objeto
        /*
        localStorage.setItem("myCategory", JSON.stringify(objectTest));

        // senão achar o chave myCategory retorna um objeto vazio
        const object = JSON.parse(localStorage.getItem("myCategory") || "{}");

        console.log(object);
        console.log(object.id);
        console.log(object.name);
        */

        // requisição para quando montar o componet do catalogo
        // parametro incial é pagina 0 e sem informar o name do produto string vazia
        productService.findAllPageRequest(queryParameters.page, queryParameters.name)
            .then((requestPromiseResponse) => {
                setProducts(requestPromiseResponse.data.content);
            });
    }, [queryParameters]) // lista de dependências do use effect

    const handleSearch = (searchBarText: string) => {
        setQueryparameters({
            ...queryParameters,
            name: searchBarText
        });
    }

    return (
        <>
            <main>
                <section id="catalog-details-section" className="ec-container">
                    <SearchBar eventOnSearch={handleSearch}></SearchBar>
                    <div className="ec-catalog-cards ec-margin-top-20px ec-margin-bottom-20px">
                        {

                            products.map(
                                productBackend =>
                                    <ProductCatalogCard key={productBackend.id} product={productBackend}></ProductCatalogCard>
                            )
                        }
                    </div>
                    <ButtonShowMore />
                </section>
            </main>
        </>
    );

}

export default ProductCatalog;