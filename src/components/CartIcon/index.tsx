import cartImg from '../../assets/cart.svg';
import './styles.css';
const CartIcon = () => {

    return (
        <>
            <img src={cartImg} alt="Carrinho de compras" />
            <div className="ec-cart-number">3</div>
        </>
    );
}

export default CartIcon;