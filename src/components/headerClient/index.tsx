import { Link } from 'react-router-dom';
import './styles.css';
import CartIcon from '../CartIcon';

const HeaderClient = () => {

    return (
        <header className="ec-header-client">
            <nav className="ec-container">
                <Link to="/">
                    <h1>Eletronics Ecommerce</h1>
                </Link>
                <div className="ec-navbar-header-right">
                    <div className="ec-menu-items-container">
                        <Link to='/cart'>
                            <div className="ec-menu-item">
                                <CartIcon></CartIcon>
                            </div>
                        </Link>
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