import SearchBar from '../../components/SearchBar';
import ProductCatalogCard from '../../components/ProductCatalogCard';

import './styles.css';
import ButtonShowMore from '../../components/ButtonShowMore';
import HeaderClient from '../../components/HeaderClient';

const ProductCatalog = () => {
    return (
        <>
            <HeaderClient></HeaderClient>
            <main>
                <section id="catalog-details-section" className="ec-container">
                    <SearchBar ></SearchBar>
                    <div className="ec-catalog-cards ec-margin-top-20px ec-margin-bottom-20px">
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                        <ProductCatalogCard />
                    </div>
                    <ButtonShowMore />
                </section>
            </main>
        </>
    );

}

export default ProductCatalog;