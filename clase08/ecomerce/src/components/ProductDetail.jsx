import Toggle from "./Toogle";

const ProductDetail = () => (
  <Toggle>
    {({ isOpen, toggle }) => (
      <div>
        <button onClick={toggle}>
          {isOpen ? "Ocultar Detalle" : "Mostrar Detalle"}
        </button>
        {isOpen && (
          <div>
            <p>Este es el detalle del producto.</p>
            <p>Este es el detalle del producto.</p>
          </div>
        )}
      </div>
    )}
  </Toggle>
);

export default ProductDetail;
