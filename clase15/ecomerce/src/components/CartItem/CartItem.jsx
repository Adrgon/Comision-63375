import {useCart} from '../../hooks/useCart'
import './CartItem.css'
import useCounter from '../../hooks/useCounter';
export default function CartItem({id, name, quantity, price}) {
  const {removeItem} = useCart()
    const { increment, decrement, valor } = useCounter(quantity);

  const handleRemove = (id) => {
    removeItem(id)
  }

  return (
    <article className="CardCartItem">
      <header className="HeaderCartItem">
        <h2 className="ItemHeaderCartItem">{name}</h2>
      </header>
      <section className="ContainerItemCartItem">
        <p className="ItemCartItem">Cantidad: {quantity}</p>
        <p className="ItemCartItem">Precio x unidad: $ {price}</p>
      </section>
      <footer className="ItemFooterCartItem">
        <p className="InfoCartItem">Subtotal: $ {price * quantity}</p>
        <button className="btn btn-primary" onClick={() => handleRemove(id)}>
          ❌
        </button>
        <button onClick={increment}>+</button>
        <span>{valor}</span>
        <button onClick={decrement}>-</button>
      </footer>
    </article>
  );
}
