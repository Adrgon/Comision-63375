import Item from "../Item/Item"


function ItemList({products}) {
    console.log(products)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {products.map((item) => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ItemList
