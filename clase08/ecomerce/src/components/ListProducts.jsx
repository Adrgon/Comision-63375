import withLoading from "./WithLoading";
const ListProduct = ({ products }) => (
  <ul>
    {products.map((product) => (
      <li key={product.id}>{product.name}</li>
    ))}
  </ul>
);

const ProductListWithLoading = withLoading(ListProduct);

export default ProductListWithLoading;
