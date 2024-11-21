import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";



function App() {

  return (
    <BrowserRouter>
      <CartProvider>
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
            element={<ItemListContainer greetings={"Tienda Coder"} />}
          />
          <Route
            exact
            path="/detail/:productId"
            element={<ItemDetailContainer greetings={"Tienda Coder"} />}
          />

          <Route path="*" element={<h1>:( 404 Not found</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
