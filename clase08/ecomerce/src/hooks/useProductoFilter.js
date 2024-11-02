import { useState, useEffect } from "react"

function useProductFilter(initialProducts) {
    const [products, setProducts] = useState(initialProducts)
    const [filter, setFilter] = useState('')

    useEffect(() => {
        if(filter) {
            setProducts(initialProducts.filter((product)=>
                product.name.toLowerCase().includes(filter.toLowerCase())
            ));
        }else {
            setProducts(initialProducts)
        }

    }, [filter, initialProducts])
    return {
        filter, 
        setFilter, 
        products
    }
}

export default useProductFilter;
