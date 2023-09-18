import './styles.css';

import ButtonBlue from '../../../components/ButtonBlue';
import ButtonWhite from '../../../components/ButtonWhite';
import { useEffect } from 'react';
import * as cartService from '../../../services/cart-service';
import { OrderDTO, OrderItemDTO } from '../../../models/order';

const item1: OrderItemDTO = new OrderItemDTO(
    1,
    1,
    90.5,
    "The Lord of the Rings",
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg"
);

const item2: OrderItemDTO = new OrderItemDTO(

    2,
    2,
    2190.0,
    "Smart TV",
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"

);

/*
const cartMockData = {
    items: [
        {
            productId: 1,
            quantity: 1,
            name: "The Lord of the Rings",
            price: 90.5,
            imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg"
        },
        {
            productId: 2,
            quantity: 2,
            name: "Smart TV",
            price: 2190.0,
            imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
        },
    ]
}
*/

export default function Kart() {

   const cartMockData : OrderDTO = new OrderDTO();

    useEffect(() => {

        cartMockData.items.unshift(item2);
        cartMockData.items.unshift(item1);

        cartService.saveCart(cartMockData);

    }, []);

    return (
        <main>
            <section id="cart-container-section" className="ec-container">
                <div className="ec-card-general ec-margin-bottom-20px">

                    {
                        cartMockData.items.map(item => (
                            <div key={item.productId} className="ec-cart-item-container ec-line-bottom">
                                <div className="ec-cart-item-left">
                                    <img src={item.imgUrl} alt={item.name} />
                                    <div className="ec-cart-item-description">
                                        <h3>{item.name}</h3>
                                        <div className="ec-cart-item-quantity-container">
                                            <div className="ec-cart-item-quantity-btn">-</div>
                                            <p>{item.quantity}</p>
                                            <div className="ec-cart-item-quantity-btn">+</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ec-cart-item-right">
                                    R$ {(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))
                    }


                    <div className="ec-cart-total-container">
                        <h3>R$ {cartMockData.totalKart}</h3>
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