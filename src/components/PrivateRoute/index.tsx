import * as authenticationService from '../../services/authentication-service';
import { Navigate } from "react-router-dom";

type Props = {
    children: JSX.Element;
}


const PrivateRoute = ({ children }: Props) => {

    if (authenticationService.userIsAuthenticated() === false || authenticationService.userIsAuthenticated() === undefined) {
        // senão estiver autenticado navega para o login
        return <Navigate to="/login"></Navigate>
    } else {
        // retorna o que esta dentro do component PrivateRoute
        return children;
    }

}

export default PrivateRoute;
