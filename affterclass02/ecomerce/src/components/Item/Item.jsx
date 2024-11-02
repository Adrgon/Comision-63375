
function Item({product}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3>{product.title}</h3>
        <p className="text-gray-600 mb-4">Precio: ${product.price}</p>
        <a
          href={product.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-600 text-white text-center py-2 rounded-md font-semibold haver:bg-blue-700 transition duration-300"
        >
          Producto
        </a>
      </div>
    </div>
  );
}

export default Item
