import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import ClientHome from "./routes/ClientHome";
import ProductCatalog from "./routes/ClientHome/ProductCatalog";
import Cart from "./routes/ClientHome/Cart";
import { useEffect, useState } from "react";
import { ContextCartNumber } from "./utils/global-context-cart";
import Login from "./routes/ClientHome/Login";
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/AdminHome";
import { history } from './utils/browser-history';
import { unstable_HistoryRouter as UnstableHistoryRouter } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AccessTokenPayloadDTO } from "./models/authentication";
import { GlobalContextToken } from "./utils/global-context-token";
import * as authenticationService from './services/authentication-service';
import * as cartService from './services/cart-service';
import Order from "./routes/ClientHome/Order";
import ProductListing from "./routes/Admin/ProductListing";
import ProductForm from "./routes/Admin/ProductForm";

function App() {

  const [globalContextCartNumber, setGlobalContextCartNumber] = useState<number>(0);

  const [globalContextTokenPayload, setGlobalContextTokenPayload] = useState<AccessTokenPayloadDTO>();


  useEffect(() => {

    // inicar a contagem do carinho no começo da API com o dados do carinho salvos no localStorage
    setGlobalContextCartNumber(cartService.getCart().items.length);

    if (authenticationService.userIsAuthenticated() == true) {
      const tokenPayload = authenticationService.getAccessTokenPayload();
      setGlobalContextTokenPayload(tokenPayload);
    }
  }, []);

  /* provendo o number no cart e o token payload na aplicacao toda */
  return (
    <GlobalContextToken.Provider value={{ globalContextTokenPayload, setGlobalContextTokenPayload }}>
      < ContextCartNumber.Provider value={{ globalContextCartNumber, setGlobalContextCartNumber }
      }>
        <UnstableHistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<ClientHome />}>
              <Route index element={<ProductCatalog />} ></Route>
              <Route path="product-catalog" element={<ProductCatalog />}> </Route>
              <Route path="product-details/:productId" element={<ProductDetails />}></Route>
              <Route path="cart" element={<Cart />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="order/:orderId" element={<PrivateRoute><Order></Order></PrivateRoute>}></Route>
            </Route >

            <Route path="/admin/" element={
              // só mostra o Admin (children do PrivateRoute) se o usuário estiver autenticado
              // só acessa a rota admin pro usuário que tiver a role admin
              <PrivateRoute arrayRoles={['ROLE_ADMIN']}>
                <Admin />
              </PrivateRoute>}>
              <Route index element={<AdminHome></AdminHome>}></Route>
              <Route path="products" element={<ProductListing></ProductListing>}></Route>
              <Route path="products/:productId" element={<ProductForm></ProductForm>} ></Route>
            </Route>
            {/*elemento navite para redirecionar*/}
            <Route path="*" element={<Navigate to="/" />}> </Route>
          </Routes >
        </UnstableHistoryRouter >
      </ContextCartNumber.Provider >
    </GlobalContextToken.Provider>
  );

}

export default App
