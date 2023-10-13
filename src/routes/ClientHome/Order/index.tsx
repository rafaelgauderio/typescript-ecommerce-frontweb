import { useEffect, useState } from "react";
import { OrderDTO } from "../../../models/order";
import { Link, useParams } from "react-router-dom";
import * as orderService from '../../../services/order-service';
import './styles.css';
import ButtonWhite from "../../../components/ButtonWhite";

export default function Order() {

    const [order, setOrder] = useState<OrderDTO>();

    const params = useParams();

    useEffect(() => {
        orderService.findOrderByIdRequest(Number(params.orderId))
            .then(response => {
                setOrder(response.data);
            })
    }, []);  



    return (
        <main>
            <section id="order-completed-section" className="ec-container">
                <div className="ec-card-general ec-margin-bottom-20px">

                    {
                        order?.items.map(item => (
                            <div key={item.productId} className="ec-cart-item-container ec-line-bottom">
                                <div className="ec-cart-item-left">
                                    <img src={item.imgUrl} alt={item.name} />
                                    <div className="ec-cart-item-description">
                                        <h3>{item.name}</h3>
                                        <div className="ec-cart-item-quantity-container">
                                            <p>{item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ec-cart-item-right">
                                    R$ {(item.subTotal).toFixed(2)}
                                </div>
                            </div>
                        ))
                    }

                    <div className="ec-cart-total-container">
                        <h3>R$ {order?.total.toFixed(2)}</h3>
                    </div>
                </div>

                <div className="ec-confirmation-message ec-margin-bottom-20px">
                    Pedido de número {order?.id} finalizado com sucesso!
                    <p>Escolha um das formas de pagamento</p>
                </div>
                <div className="ec-btn-container">
                    <Link to="/">
                        <ButtonWhite message={"Home"}>
                        </ButtonWhite>
                    </Link>
                </div>

            </section>
        </main>
    );
}
