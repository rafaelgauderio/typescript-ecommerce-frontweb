import { RoleEnum } from '../../models/authentication';
import * as authenticationService from '../../services/authentication-service';
import { Navigate } from "react-router-dom";

type Props = {
    children: JSX.Element;
    arrayRoles?: RoleEnum[];
}


const PrivateRoute = ({ children, arrayRoles = [] }: Props) => {
    // senão estiver autenticado navega para o login
    if (authenticationService.userIsAuthenticated() === false || authenticationService.userIsAuthenticated() === undefined) {
        return <Navigate to="/login"></Navigate>
    }
    // se tiver autenticado, mas não tiver a permissao necessária vai para a página de catlogo
    if (authenticationService.userIsAuthenticated() == true && authenticationService.userHasAnyRoles(arrayRoles) == false) {
        return <Navigate to="/product-catalog"></Navigate>
    }
    // caso contrário renderiza o componete filho
    else {
        // retorna o que esta dentro do component PrivateRoute
        return children;
    }

}

export default PrivateRoute;
