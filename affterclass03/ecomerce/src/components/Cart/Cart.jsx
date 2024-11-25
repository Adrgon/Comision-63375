import { Link } from "react-router-dom";
export default function Cart() {
  return (
    <div>
      <h3>Productos del carrito</h3>
      <ul>
        <li>producto 1</li>
        <li>producto 2</li>
        <li>producto 5</li>
        <li>producto 20</li>
      </ul>

      <Link to='/checkout'>Finalizar compra</Link>
    </div>
  );
}
