import SearchBar from '../../../components/SearchBar';
import ProductCatalogCard from '../../../components/ProductCatalogCard';

import './styles.css';
import ButtonShowMore from '../../../components/ButtonShowMore';
import { ProductDTO } from '../../../models/product';

const productMock: ProductDTO = {
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

const ProductCatalog = () => {
    return (
        <>
            <main>
                <section id="catalog-details-section" className="ec-container">
                    <SearchBar ></SearchBar>
                    <div className="ec-catalog-cards ec-margin-top-20px ec-margin-bottom-20px">
                        <ProductCatalogCard product={productMock} />
                        <ProductCatalogCard product={productMock} />
                        <ProductCatalogCard product={productMock} />
                        <ProductCatalogCard product={productMock} />
                        <ProductCatalogCard product={productMock} />
                        <ProductCatalogCard product={productMock} />
                        <ProductCatalogCard product={productMock} />
                        <ProductCatalogCard product={productMock} />
                        <ProductCatalogCard product={productMock} />
                        <ProductCatalogCard product={productMock} />
                        <ProductCatalogCard product={productMock} />
                        <ProductCatalogCard product={productMock} />
                    </div>
                    <ButtonShowMore />
                </section>
            </main>
        </>
    );

}

export default ProductCatalog;