import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
//import Ejemplo from "./pages/Ejemplo";
function App() {

  return (
    <BrowserRouter>
      <CartProvider >
        <NavBar cartCount={5} title="Tienda Coder" />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greetings={"Tienda Coder"} />}
          />
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/detail/:productId"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
