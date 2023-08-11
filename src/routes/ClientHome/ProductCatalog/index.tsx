import SearchBar from '../../../components/SearchBar';
import ProductCatalogCard from '../../../components/ProductCatalogCard';
import './styles.css';
import ButtonShowMore from '../../../components/ButtonShowMore';
import * as productService from "../../../services/product-services";


const ProductCatalog = () => {
    return (
        <>
            <main>
                <section id="catalog-details-section" className="ec-container">
                    <SearchBar ></SearchBar>
                    <div className="ec-catalog-cards ec-margin-top-20px ec-margin-bottom-20px">
                        {
                            productService.findAll().map( (productMock) =>
                            <ProductCatalogCard key={productMock.id} product={productMock}></ProductCatalogCard>
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