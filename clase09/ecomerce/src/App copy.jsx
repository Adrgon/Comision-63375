//import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [view, setView] = useState("list");
  return (
    <>
      {/* <NavBar /> */}
      <button onClick={() => setView("list")}>List</button>
      <button onClick={() => setView("detail")}>Detail</button>
      <button onClick={() => setView("cart")}>Cart</button>

      {view === "list" && (
        <div>
          <h1>Listado de productos</h1>
          <p>lorem ipsum dolor sit</p>
        </div>
      )}

      {view === "detail" && (
        <div>
          <h1>Detalle de productos</h1>
          <p>lorem ipsum dolor sit</p>
        </div>
      )}

      {view === "cart" && (
        <div>
          <h1>Carrito de compras</h1>
          <p>lorem ipsum dolor sit</p>
        </div>
      )}

    </>
  );
}

export default App
