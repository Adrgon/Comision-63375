import { Item } from "../Item/Item";

import { useState } from "react";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([
    "Camiseta",
    "Short",
    "Zapatos",
    "Medias",
    "Buzos",
  ]);
  
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((item) => <Item key={item} nombre={item}/>)}
      </ul>
    </div>
  );
}

export default ItemListContainer
