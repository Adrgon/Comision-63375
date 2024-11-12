
import {createContext, useContext} from 'react';

// crear el contexto
const NumberContext = createContext();

export default function AppUseContextSimple() {
    const number = 500;
    const nombre = 'Ricardo';
    const accion = () => {
        console.log('accion');
    }

    let obj = {
        number,
        nombre,
        accion
    }
    return (
        // Prveer el contexto
        <NumberContext.Provider value={obj}>
            <ComponentA />
        </NumberContext.Provider>

    )
}

function ComponentA() {
    const {accion, number} = useContext(NumberContext);
    accion()
    return (
        <>
            <h2>Componente A {number}</h2>
            <ComponentB />
        </>
    )
}

function ComponentB() {
    const { nombre } = useContext(NumberContext);
  return (
    <>
      <h2>Componente B</h2>
      <p>El nombre es: {nombre}</p>
      <ComponentC />
    </>
  );
}

function ComponentC() {
    const {number} = useContext(NumberContext);
  return (
    <>
      <h2>Componente C</h2>
      <p>El numero de es: {number}</p>
    </>
  );
}
