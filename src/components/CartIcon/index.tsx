import cartImg from '../../assets/cart.svg';
import './styles.css';
import * as cartService from '../../services/cart-service';
import { useState } from 'react';

const CartIcon = () => {

    const [cart, setCart] = useState(cartService.getCart());

    return (
        <>
            <img src={cartImg} alt="Carrinho de compras" />
            <div className="ec-cart-number">{cart.items.length}</div>
        </>
    );
}

export default CartIcon;