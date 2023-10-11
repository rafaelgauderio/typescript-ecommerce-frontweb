import SearchBar from '../../../components/SearchBar';
import ProductCatalogCard from '../../../components/ProductCatalogCard';
import './styles.css';
import ButtonShowMore from '../../../components/ButtonShowMore';
import * as productService from "../../../services/product-services";
import { ProductDTO } from '../../../models/product';
import { useEffect, useState } from 'react';
import { getAccessTokenPayload, userHasAnyRoles, userIsAuthenticated } from '../../../services/authentication-service';

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

    // se for a última página tem que desabilitar o botão mostrar mais produtos
    const [isLastPage, setIsLastPage] = useState<boolean>(false);

    useEffect(() => {

        //console.log("user is authenticated? ", userIsAuthenticated());
        //console.log("userHasAnyRole:", userHasAnyRoles(['ROLE_ADMIN']));
        //console.log(getAccessTokenPayload().authorities);


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
                // concatendo os dados da página anterior com o da próxima página
                const nextProductsPage = requestPromiseResponse.data.content;
                // concatendo os dois arrays de produtos
                setProducts(products.concat(nextProductsPage));
                // setando o valor da ultima página para true se for a ultima página da busca
                setIsLastPage(requestPromiseResponse.data.last);
            });
    }, [queryParameters]) // lista de dependências do use effect

    const handleSearch = (searchBarText: string) => {
        // sempre que fizer uma busca começar a lista vazia, para não concatenar 
        // com os produtos que já estiverem na tela e voltar para a página 0        
        setProducts([]);
        setQueryparameters({
            ...queryParameters,
            page: 0,
            name: searchBarText,            
        });
    }

    const handleNextPageOnClick = () => {
        // setar novo valor da página
        setQueryparameters({
            ...queryParameters,
            page: queryParameters.page + 1
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
                    {/*renderizar o botão  'Mostrar mais' somente se não for a ultima busca */}
                    {
                        isLastPage === false &&
                        <div onClick={handleNextPageOnClick}>
                            <ButtonShowMore />
                        </div>
                    }

                </section>
            </main>
        </>
    );

}

export default ProductCatalog;