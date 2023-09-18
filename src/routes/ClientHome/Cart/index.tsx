import './styles.css';

import computerImg from '../../../assets/computer.png';
import tableImg from '../../../assets/tablet.png';
import ButtonBlue from '../../../components/ButtonBlue';
import ButtonWhite from '../../../components/ButtonWhite';

export default function Kart() {

    return (
        <main>
            <section id="cart-container-section" className="ec-container">
                <div className="ec-card-general ec-margin-bottom-20px">
                    <div className="ec-cart-item-container ec-line-bottom">
                        <div className="ec-cart-item-left">
                            <img src={tableImg} alt="Tablet" />
                            <div className="ec-cart-item-description">
                                <h3>Tablet Sansung core i5</h3>
                                <div className="ec-cart-item-quantity-container">
                                    <div className="ec-cart-item-quantity-btn">-</div>
                                    <p>2</p>
                                    <div className="ec-cart-item-quantity-btn">+</div>
                                </div>
                            </div>
                        </div>
                        <div className="ec-cart-item-right">
                            R$ 4000,00
                        </div>
                    </div>
                    <div className="ec-cart-item-container ec-line-bottom">
                        <div className="ec-cart-item-left">
                            <img src={computerImg} alt="Computador" />
                            <div className="ec-cart-item-description">
                                <h3>Computador Gamer Professional</h3>
                                <div className="ec-cart-item-quantity-container">
                                    <div className="ec-cart-item-quantity-btn">-</div>
                                    <p>2</p>
                                    <div className="ec-cart-item-quantity-btn">+</div>
                                </div>
                            </div>
                        </div>
                        <div className="ec-cart-item-right">
                            R$ 5000,00
                        </div>
                    </div>
                    <div className="ec-cart-total-container">
                        <h3>R$ 18000,00</h3>
                    </div>
                </div>
                <div className="ec-btn-container">
                    <ButtonBlue message={"Finalizar Pedido"}>
                    </ButtonBlue>
                    <ButtonWhite message={"Continuar Comprando"}>
                    </ButtonWhite>
                </div>
            </section>
        </main >
    );

}