import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";

import { NotificationProvider } from "./context/NotificationContext";

import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NotificationProvider>
          <NavBar cartCount={5} title="Tienda Coder" />
          <Routes>
            <Route
              exact
              path="/"
              element={<ItemListContainer greetings={"Todos los productos"} />}
            />
            <Route
              exact
              path="/category/:categoryId"
              element={
                <ItemListContainer greetings={"Filtrados por categoria"} />
              }
            />

            <Route
              exact
              path="/detail/:productId"
              element={<ItemDetailContainer greetings={"Tienda Coder"} />}
            />

            <Route exact path="/cart" element={<Cart />} />

            <Route exact path="/checkout" element={<Checkout />} />

            <Route path="*" element={<h1>:( 404 Not found</h1>} />
          </Routes>
        </NotificationProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
