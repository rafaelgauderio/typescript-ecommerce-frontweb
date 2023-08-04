import { ProductDTO } from '../../models/product';
import ProductCategory from '../ProductCategory';
import './styles.css';

type Props = {
    product : ProductDTO;
}

const ProductDetailsCard = ({product} : Props) => {

    return (
        <div className="ec-card-general ec-margin-bottom-20px">
            <div className="ec-product-details-top">
                <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="ec-product-details-bottom ec-line-top">
                <h3>{product.price.toFixed(2)}</h3>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div className="ec-categories-container">
                    <ProductCategory name={'Computadores'}></ProductCategory>
                    <ProductCategory name={'Eletrônicos'}></ProductCategory>
                </div>

            </div>
        </div>
    );
}

export default ProductDetailsCard;