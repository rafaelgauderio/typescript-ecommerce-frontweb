import SearchBar from '../../../components/SearchBar';
import ProductCatalogCard from '../../../components/ProductCatalogCard';
import './styles.css';
import ButtonShowMore from '../../../components/ButtonShowMore';
//import * as productService from "../../../services/product-services";
import { ProductDTO } from '../../../models/product';
import { useEffect, useState } from 'react';
import axios from 'axios';

const host = "http://localhost:8080";

const ProductCatalog = () => {

    // useState para armazenas o estado dentro do component
    // retorna um list de produtos do backend , valor inicial é uma empty list
    const [products, setProducts] = useState<ProductDTO []>([]);

    useEffect ( ()=> {
        // requisição para quando montar o componet do catalogo
        axios.get(`${host}/products?size=12`)
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