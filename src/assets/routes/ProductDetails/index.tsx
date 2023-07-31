import ButtonBlue from "../../../components/ButtonBlue";
import ButtonWhite from "../../../components/ButtonWhite";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import HeaderClient from "../../../components/headerClient";
import './styles.css';

export default function ProductDetails() {

    return (
        <>
            <HeaderClient></HeaderClient>
            <main>
                <section id="product-details-section" className="ec-container">
                    <ProductDetailsCard></ProductDetailsCard>
                    <div className="ec-btn-container">
                        <ButtonBlue></ButtonBlue>
                        <ButtonWhite></ButtonWhite>
                    </div>
                </section>
            </main>
        </>
    );
}

