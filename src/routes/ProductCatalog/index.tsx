import HeaderClient from '../../components/headerClient';
import './styles.css';
import SearchBar from '../../components/SearchBar';
import ProductCatalogCard from '../../components/ProductCatalogCard';

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
                    <button className="ec-btn ec-btn-show-more">Mostrar mais</button>
                </section>
            </main>
        </>
    );

}

export default ProductCatalog;