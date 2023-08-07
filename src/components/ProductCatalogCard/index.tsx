import './styles.css';
import { ProductDTO } from '../../models/product';

type Props = {
    product : ProductDTO;
}

export default function ProductCatalogCard({product} : Props) {
    return (
        <>
            <div className="ec-card-general">
                <div className="ec-catalog-card-top ec-line-bottom">
                    <img src={product.imgUrl} alt={product.name} />
                </div>
                <div className="ec-catalog-card-bottom">
                    <h4>{product.name}</h4>
                    <h3>R$ {(product.price).toFixed(2)}</h3>
                </div>
            </div>            
        </>
    );
}