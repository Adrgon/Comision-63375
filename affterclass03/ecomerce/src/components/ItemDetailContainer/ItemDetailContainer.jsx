import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"


import ItemDetail from "../ItemDetail/ItemDetail"
import { useNotifacation } from "../../hooks/useNotification"

import './ItemDetailContainer.css'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const [loader, setLoader] = useState(false)
  const { productId } = useParams();

  const {setNotification} = useNotifacation()

  useEffect(()=>{
    setLoader(true);
    getDoc(doc(db, 'products', productId))
      .then((querySnapshot) => {
        const prod = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(prod)
        setNotification("danger", "Producto encontrado");
      })
      .catch((err)=> {
        setNotification('danger', 'No es posible traer el producto')
        console.log(err)
      })
      .finally(()=>{
        setLoader(false)
      })
  }, [productId])

/*   
if(loader){
    return <h4>Loading...</h4>
  } 
*/

  console.log(productId)
  return (
    <>
      {loader 
        ? <h4>Loading...</h4> 
        : <ItemDetail {...product} />
      }
    </>
  );
}

export default ItemDetailContainer
