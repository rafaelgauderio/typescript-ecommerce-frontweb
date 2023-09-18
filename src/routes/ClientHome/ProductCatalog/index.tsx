import SearchBar from '../../../components/SearchBar';
import ProductCatalogCard from '../../../components/ProductCatalogCard';
import './styles.css';
import ButtonShowMore from '../../../components/ButtonShowMore';
import * as productService from "../../../services/product-services";
import { ProductDTO } from '../../../models/product';
import { useEffect, useState } from 'react';

const ProductCatalog = () => {


    /*
    const objectTest : CategoryDTO = {
        id: 15,
        name: "Tablet"
    }
    */


    // useState para armazenas o estado dentro do component
    // retorna um list de produtos do backend , valor inicial é uma empty list
    const [products, setProducts] = useState<ProductDTO []>([]);

    useEffect ( ()=> {

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
        productService.findAll()
            .then((requestPromiseResponse) => {
                setProducts(requestPromiseResponse.data.content);
            });
    },[])

    return (
        <>
            <main>
                <section id="catalog-details-section" className="ec-container">
                    <SearchBar ></SearchBar>
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