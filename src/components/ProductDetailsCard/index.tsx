import computerImg from '../../assets/computer.png';
import ProductCategory from '../ProductCategory';
import './styles.css';

const ProductDetailsCard = () => {

    return (
        <div className="ec-card-general ec-margin-bottom-20px">
            <div className="ec-product-details-top">
                <img src={computerImg} alt="computador" />
            </div>
            <div className="ec-product-details-bottom ec-line-top">
                <h3>R$ 2500,99</h3>
                <h4>Computador Desktop Intel i5</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cumque autem porro reprehenderit dicta eveniet quam maiores explicabo asperiores pariatur doloremque dolores dolorem quis quas reiciendis provident voluptatibus eos, veritatis corrupti sint assumenda. Magni accusantium dolorem vel, repellendus impedit labore debitis adipisci voluptatem est, tenetur delectus expedita, inventore qui! Labore similique iure odio architecto, delectus rem quidem fugit quis veritatis ad incidunt cum asperiores eos impedit omnis ipsa saepe dolore sapiente ex, minus consequatur, velit doloribus. Rerum rem id quibusdam quidem ducimus accusamus repudiandae culpa! Unde, vel perferendis ullam reiciendis sed consectetur sunt architecto id ad expedita et. Perspiciatis, corporis.</p>
                <div className="ec-categories-container">
                    <ProductCategory name={'Computadores'}></ProductCategory>
                    <ProductCategory name={'Eletrônicos'}></ProductCategory>
                </div>

            </div>
        </div>
    );
}

export default ProductDetailsCard;