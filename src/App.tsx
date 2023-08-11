import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import ClientHome from "./routes/ClientHome";
import ProductCatalog from "./routes/ClientHome/ProductCatalog";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<ProductCatalog />} ></Route>
          <Route path="product-catalog" element={<ProductCatalog />}> </Route>
          <Route path="product-details" element={<ProductDetails />}>S </Route>
        </Route >
      </Routes >
    </BrowserRouter >
  );

}

export default App
