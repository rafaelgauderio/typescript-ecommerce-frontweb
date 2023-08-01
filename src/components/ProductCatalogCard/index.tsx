import './styles.css';
import tableImg from '../../assets/tablet.png';


export default function ProductCatalogCard () {
    return (
        <div className="ec-card-general">
            <div className="ec-catalog-card-top ec-line-bottom">
                <img src={tableImg} alt="tablet" />
            </div>
            <div className="ec-catalog-card-bottom">
                <h4>
                    Tablet Sansung - Processor core i5 - 16 giga de memória ram.</h4>
                <h3>R$ 4.500,00</h3>
            </div>
        </div>
    );
}