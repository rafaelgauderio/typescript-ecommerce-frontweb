import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import ClientHome from "./routes/ClientHome";
import ProductCatalog from "./routes/ClientHome/ProductCatalog";
import Cart from "./routes/ClientHome/Cart";
import { useState } from "react";
import { ContextCartNumber } from "./utils/global-context-cart";
import Login from "./routes/ClientHome/Login";
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/AdminHome";
import {history} from './utils/browser-history';
import { unstable_HistoryRouter as UnstableHistoryHouter} from "react-router-dom";

function App() {

  const [globalContextCartNumber, setGlobalContextCartNumber] = useState<number>(0);

   /* provendo o number no cart na aplicacao toda */
  return (   
    < ContextCartNumber.Provider value = {{ globalContextCartNumber, setGlobalContextCartNumber }
}>
  <UnstableHistoryHouter history={history}>
    <Routes>
      <Route path="/" element={<ClientHome />}>
        <Route index element={<ProductCatalog />} ></Route>
        <Route path="product-catalog" element={<ProductCatalog />}> </Route>
        <Route path="product-details/:productId" element={<ProductDetails />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="login" element={<Login />}></Route>  
      </Route >

      <Route path="/admin/" element={<Admin />}>
        <Route index element={<AdminHome></AdminHome>}></Route>
      </Route>
      {/*elemento navite para redirecionar*/}
      <Route path="*" element={<Navigate to="/" />}> </Route>
    </Routes >
  </UnstableHistoryHouter >
    </ContextCartNumber.Provider >
  );

}

export default App
