
import ButtonBlue from '../../components/ButtonBlue';
import ButtonWhite from '../../components/ButtonWhite';
import HeaderClient from '../../components/HeaderClient';
import ProductDetailsCard from '../../components/ProductDetailsCard';
import { ProductDTO } from '../../models/product';
import './styles.css';

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
            id:5,
            name: "Notebooks"
        }
        
    ],
    
};

export default function ProductDetails() {

    return (
        <>
            <HeaderClient></HeaderClient>
            <main>
                <section id="product-details-section" className="ec-container">
                    <ProductDetailsCard product={product}></ProductDetailsCard>
                    <div className="ec-btn-container">
                        <ButtonBlue message={"Comprar"}></ButtonBlue>
                        <ButtonWhite message={"Voltar"}></ButtonWhite>
                    </div>
                </section>
            </main>
        </>
    );
}

