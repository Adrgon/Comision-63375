import { useEffect, useState } from "react"
import {getProducts, getProductsByCategory} from '../asyncMock.js'
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"

function ItemListContainer({greetings}) {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
        const asyncFunctions = categoryId ? getProductsByCategory : getProducts
        asyncFunctions(categoryId)
            .then(data => setProducts(data))
    }, [categoryId])
  return (
    <>
        <h2>{greetings}</h2>
        <ItemList products={products} />
    </>
  )
}

export default ItemListContainer
