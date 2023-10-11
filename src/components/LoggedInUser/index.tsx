import { useContext } from "react";
import { GlobalContextToken } from "../../utils/global-context-token";
import * as authenticationService from '../../services/authentication-service';
import { Link } from "react-router-dom";

const LoggedInUser = () => {

    const { globalContextTokenPayload, setGlobalContextTokenPayload } = useContext(GlobalContextToken);

    const handleLogoutOnClick = () => {
        authenticationService.logout();
        //setar contexto para undefined para não mais carregar o email do usuário no cliente header
        setGlobalContextTokenPayload(undefined);
    }

    return (

        globalContextTokenPayload !== undefined && authenticationService.userIsAuthenticated() == true
            ? (
                <div className="ec-looged-user">
                    <p>{globalContextTokenPayload.user_name}</p>
                    <span onClick={handleLogoutOnClick}>Sair</span>
                </div>
            )
            : (
                <Link to="/login">
                    Entrar
                </Link>
            )

    );
}

export default LoggedInUser;