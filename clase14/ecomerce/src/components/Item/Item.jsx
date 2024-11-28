import { Link } from "react-router-dom"


function Item({product}) {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={product.img} className="card-img-top"/>
        <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to={`/detail/${product.id}`}>Ver detalle</Link>
        </div>
    </div>
  )
}

export default Item
