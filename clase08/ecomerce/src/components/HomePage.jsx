import ProductListWithLoading from "./ListProducts";
const HomePage = () => {
  const products = [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
  ];
  return <ProductListWithLoading products={products} />;
};

export default HomePage;
