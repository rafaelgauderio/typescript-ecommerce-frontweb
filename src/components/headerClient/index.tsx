import { Link } from 'react-router-dom';
import './styles.css';
import CartIcon from '../CartIcon';
import adminIcon from '../../assets/admin.svg';
import * as authenticationService from '../../services/authentication-service';
import { GlobalContextToken } from '../../utils/global-context-token';
import {useContext} from 'react';


const HeaderClient = () => {

    // component admin vai ficar observando o contexto global da API para ver se é renderizado
    // ou não de acordo com qual perfil do usuário logado
    const {globalContextTokenPayload} = useContext(GlobalContextToken);

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
                            globalContextTokenPayload &&
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