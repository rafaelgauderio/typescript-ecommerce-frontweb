import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCatalog from "./routes/ProductCatalog";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductCatalog />}></Route>        
      </Routes>
    </BrowserRouter>
  );

}

export default App
