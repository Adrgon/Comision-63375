import {useState} from "react"
import Card from "../Card/Card"

export const Item = ({nombre}) => {
    const [cantidad, setCantidad] = useState(0);

  const agregarAlCarrito = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <>
      <Card>
        <h3>{nombre}</h3>
        <button onClick={agregarAlCarrito}>Agregar</button>
        <p>{cantidad}</p> 
      </Card>
    </>
  );
}
