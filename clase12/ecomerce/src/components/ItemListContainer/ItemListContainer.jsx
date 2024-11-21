import { useEffect, useState } from "react"
//import {getProducts, getProductsByCategory} from '../../asyncMock.js'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { db } from "../../services/firebase"
import {collection, getDocs, query, where} from 'firebase/firestore'


function ItemListContainer({greetings}) {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    const {categoryId} = useParams()

    useEffect(()=>{
      setLoader(true)
      const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))   // filtrados por categoria
        : collection(db, "products")    // todos los productos
      
        getDocs(collectionRef)
          .then((querySnapshot)=>{
            const productos = querySnapshot.docs.map((doc)=>{
              return {id: doc.id, ...doc.data()}
            })
            setProducts(productos)
          })
          .catch((error)=>{
            console.log(error)
          })
          .finally(()=>{
            setLoader(false)
          })

    }, [categoryId])
  return (
    <>
        <h2 className="text-center">{greetings}</h2>
        <ItemList products={products} />
    </>
  )
}

export default ItemListContainer
