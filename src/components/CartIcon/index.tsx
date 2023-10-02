import cartImg from '../../assets/cart.svg';
import './styles.css';
import { useContext } from 'react';
import { ContextCartNumber } from '../../utils/global-context-cart';

const CartIcon = () => {

    // chamando o contenxto da aplicação cada vez que alterar os itens do carrinho
    const { globalContextCartNumber } = useContext(ContextCartNumber);

    return (
        <>
            <img src={cartImg} alt="Carrinho de compras" />
            {/* só renderiza a bolinha com quantidade se hover itens no carrinho */}
            {
                globalContextCartNumber >= 1 &&
                <div className="ec-cart-number">{globalContextCartNumber}</div>
            }

        </>
    );
}

export default CartIcon;