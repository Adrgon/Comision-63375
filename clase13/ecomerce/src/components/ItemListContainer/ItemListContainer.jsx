import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemList from "../ItemList/ItemList"

import { db } from "../../services/firebase"
import {collection, getDocs, query, where} from 'firebase/firestore'
import { useNotifacation } from "../../hooks/useNotification"

function ItemListContainer({greetings}) {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    const {categoryId} = useParams()
    const { setNotification } = useNotifacation();

    useEffect(()=>{
      setLoader(true)
      
      //const referencia; 
      /* if(categoryId){
        referencia = query(collection(db, "products"), where("category", "==", categoryId)); 
      }else {
        referencia = collection(db, "products"); 
      } */
     
      const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))   // filtrados por categoria
        : collection(db, "products")    // todos los productos
      
        getDocs(collectionRef)
          .then((querySnapshot)=>{
            const productos = querySnapshot.docs.map((doc)=>{
              return {id: doc.id, ...doc.data()}
            })
            setProducts(productos)
            setNotification("succes", "Producto encontrado");
          })
          .catch((error)=>{
            setNotification("danger", "No es posible obtener productos");
            console.log(error)
          })
          .finally(()=>{
            setLoader(false)
          })

    }, [categoryId])

    if(loader){
      return (
        <h4
          className="text-center"
          style={{ backgroundColor: "red", color: "white", padding: "10px"}}
        >
          Loading...
        </h4>
      );
    }


  return (
    <div className="container">
        <h2 className="text-center">{greetings}</h2>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
