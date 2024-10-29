import {useState, useEffect } from "react"
//import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

function ItemListContainer(props) {
  const [productos, setProductos] = useState([])
  //const productos = [];

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=celular')
    .then((data)=>{
      console.log(data)
      return data.json()
    })
    .then((datos)=>{
      setProductos(datos.results)
      console.log(datos)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])  



  return (
    <>
      <h2>{props.greeting}</h2>
      <ItemList products={productos} />
    </>
  );
}

export default ItemListContainer
