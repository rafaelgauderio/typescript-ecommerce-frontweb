import { Link } from 'react-router-dom';
import cartImg from '../../assets/cart.svg';
import './styles.css';

const HeaderClient = () => {

    return (
        <header className="ec-header-client">
            <nav className="ec-container">
                <Link to="/">
                    <h1>Eletronics Ecommerce</h1>
                </Link>
                <div className="ec-navbar-header-right">
                    <div className="ec-menu-items-container">
                        <div className="ec-menu-item">
                            <Link to='/cart'>
                                <img src={cartImg} alt="Carrinho de compras" />
                            </Link>
                        </div>
                    </div>
                    <Link to="/login">
                        Entrar
                    </Link>
                </div>
            </nav>
        </header>
    );

};

export default HeaderClient;