import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

function ItemListContainer(props) {
  const [productos, setProductos] = useState([])
  //const productos = [];

  useEffect(() => {
   //voy a buscar los productos
   // guardo dentro del array de productos
   // lo guardo en el estado que se llama productos
   // setProductos(productos)
   // emular la busqueda de datos fuera de la app

   getProducts()
    .then((res) => {
      console.log(res)
      setProductos(res)
    })
    .catch((err) => {
      console.log(err)
    })      
  },[productos])

  return (
    <>
      <h2 className="text-3xl font-bold underline">{props.greeting}</h2>
      <ItemList products={productos} />
    </>
  );
}

export default ItemListContainer
