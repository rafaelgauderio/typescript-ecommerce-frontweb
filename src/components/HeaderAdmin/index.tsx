import './styles.css';
import produtcsIcon from '../../assets/products.svg';
import homeIcon from '../../assets/home.svg';
import LoggedInUser from '../LoggedInUser';
import { NavLink } from 'react-router-dom';


const HeaderAdmin = () => {

    return (
        <header className="ec-header-admin-panel">
            <nav className="ec-container">
                <NavLink to={"/"}>
                    <h1>Eletronics Ecommerce</h1>
                </NavLink>
                <div className="ec-navbar-header-right">
                    <div className="ec-menu-items-container">
                        <NavLink
                            to={"/admin/home"}
                            className={({ isActive }) => isActive ? "ec-menu-item-active" : ""}>
                            <div className="ec-menu-item">
                                <img src={homeIcon} alt="Início" />
                                <p>Início</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={"/admin/products"}
                            className={({ isActive }) => isActive ? "ec-menu-item-active" : ""}>
                            <div className="ec-menu-item">
                                <img src={produtcsIcon} alt="Cadastro de produtos" />
                                <p>Produtos</p>
                            </div>
                        </NavLink>
                    </div>
                    <LoggedInUser></LoggedInUser>
                </div>
            </nav>
        </header>
    );

};

export default HeaderAdmin;