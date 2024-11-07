import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {getProductByID} from '../asyncMock.js'
import ItemDetail from "./ItemDetail.jsx"
function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const {productId} = useParams();

  useEffect(()=>{
    getProductByID(productId)
      .then((res) =>{
        //console.log(res);
        setProduct(res)
      })
  }, [productId])

  console.log(productId)
  return (
    <>
      <ItemDetail {...product} />
    </>
  );
}

export default ItemDetailContainer
