import {useState} from "react"
import useCounter from "../../hooks/useCounter";

function ItemCount({initialValue=1, stock, onAdd}) {
  const {increment, decrement, valor: count} = useCounter(initialValue)
  //const [count, setCount] = useState(initialValue)
    //const [count, setCount] = useState(initialValue)
/*   const decrement = () => {
    if(count>1){
        setCount(count - 1)
    }
  } */
/*     const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }; */
  
    return (
    <>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      <button onClick={increment}>Incrementar</button>
    </>
  );
}

export default ItemCount
