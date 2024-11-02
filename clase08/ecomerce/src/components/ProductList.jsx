
import useProductFilter from "../hooks/useProductoFilter"


const ProductList = ({initialProducts}) => {
    const {filter, setFilter, products} = useProductFilter(initialProducts)
  return (
    <div>
        <input 
            type="text"
            value={filter}
            onChange={(e)=> setFilter(e.target.value)}
            placeholder="filtrar..."
        />
        <ul>
            {products.map((item)=>(
                <li key={item.id} >{item.name}</li>
            ))}
        </ul>

    </div>
  )
}
export default ProductList
