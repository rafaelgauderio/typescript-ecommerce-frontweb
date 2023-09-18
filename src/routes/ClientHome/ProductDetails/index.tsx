import ButtonBlue from '../../../components/ButtonBlue';
import ButtonWhite from '../../../components/ButtonWhite';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import './styles.css';
 import * as productService from '../../../services/product-services';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';

/*
const product: ProductDTO = {
    id: 5,
    name: "Computador Core i5",
    description: "Computador processador core i5, 16 Giga de memória Ram, HD SSD de 960 Giga",
    price: 4500.90,
    imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/9b5846b1157b296c3012f16c817f70ad1929fa6f/backend/img/17-big.jpg?raw=true",
    categories: [
        {
            id: 1,
            name: "Computadores"
        },
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 5,
            name: "Notebooks"
        }

    ],

};
*/

export default function ProductDetails() {

    // objeto para receber ler os paramentros de rota
    const objectParams = useParams();

    const [product, setProduct] = useState<ProductDTO>();

    const navigate = useNavigate();

    // dois parametros no useEffect: função quando monta o componente e lista de dependências a serem observadas.
    useEffect(() => {

        productService.findProductById(Number(objectParams.productId))
            .then(responseRequest => {
                //console.log("request response");
                //console.log(requestResponse);
                //console.log("object data");
                //console.log(requestResponse.data);
                setProduct(responseRequest.data);
            })
            .catch ( () => {
                //console.log(error.response.data);
                alert("Informaste um id de Produto inexistente.\nClick em ok para voltar para a página inicial");               
                // direcionar para o catálogo caso informar um id que não existe
                navigate("/");
            });
        //const produtoMockado = productService.findProductById(Number(objectParams.productId));        
    }, []);

    // usar o useEffect para que no momento que o componete for montado seja feita a requisição.
    // converter para Number (tudo nas requisicoes do protocolo http trafega como string)
    // apelido productID definido em App.tsx


    return (
        <>
            <main>
                <section id="product-details-section" className="ec-container">
                    {// renderização condicional para product não ser undefined
                    // operarador ternário para caso informar um productId inválido
                        product 
                        &&
                        <ProductDetailsCard product={product}></ProductDetailsCard>                                                                 
                    }
                    <div className="ec-btn-container">
                        <ButtonBlue message={"Comprar"}></ButtonBlue>
                        <Link to="/">
                            <ButtonWhite message={"Voltar"}></ButtonWhite>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}


