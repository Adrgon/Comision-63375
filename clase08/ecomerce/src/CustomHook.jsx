import { useEffect, useState } from "react"
import {getProducts} from "./asyncMock"
import ProductList from "./components/ProductList"

const CustomHook = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts().then((data) => {
            setProductos(data)
        })
    },[])   


  
    return (
      <>
        <h1>ejemplo de e-comerce</h1>
        <ProductList initialProducts={productos} />
      </>
    );
}

export default CustomHook
