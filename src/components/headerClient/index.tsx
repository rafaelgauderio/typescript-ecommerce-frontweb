import { Link } from 'react-router-dom';
import './styles.css';
import CartIcon from '../CartIcon';
import adminIcon from '../../assets/admin.svg';
import * as authenticationService from '../../services/authentication-service';


const HeaderClient = () => {

    return (
        <header className="ec-header-client">
            <nav className="ec-container">
                <Link to="/">
                    <h1>Eletronics Ecommerce</h1>
                </Link>
                <div className="ec-navbar-header-right">
                    <div className="ec-menu-items-container">

                        {/*Só renderiza o componente admin icon se estiver logado como admin*/}
                        {
                            authenticationService.userHasAnyRoles(['ROLE_ADMIN']) &&
                            <Link to="/admin">
                                <div className="ec-menu-item">
                                    <img src={adminIcon} alt="Admin"></img>
                                </div>
                            </Link>
                        }
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