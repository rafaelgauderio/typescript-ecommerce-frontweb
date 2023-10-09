import { Link } from 'react-router-dom';
import './styles.css';
import produtcsIcon from '../../assets/products.svg';
import homeIcon from '../../assets/home.svg';


const HeaderAdmin = () => {

    return (
        <header className="ec-header-admin-panel">
            <nav className="ec-container">
                <h1>Painel do Administrador</h1>
                <div className="ec-navbar-header-right">
                    <div className="ec-menu-items-container">
                        <div className="ec-menu-item">
                            <img src={homeIcon} alt="Início" />
                            <p>Início</p>
                        </div>
                        <div className="ec-menu-item">
                            <img src={produtcsIcon} alt="Cadastro de produtos" />
                            <p className="ec-menu-item-active">Produtos</p>
                        </div>
                    </div>
                    <div className="ec-logged-user">
                        <p>Rafael de Luca</p>
                        <a href="#">Sair</a>
                    </div>
                </div>
            </nav>
        </header>
    );

};

export default HeaderAdmin;