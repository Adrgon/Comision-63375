import { useState, useRef, useEffect } from "react"
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
//import NavBar from "./components/NavBar/NavBar"

function App() {

  const [valor, setValor] = useState(false);
  const [flag, setFlag] = useState(false)

/*   useEffect(()=>{
    console.log("se ejecuta a cada render")
  }) // asi no se utiliza nunca. Mucho cuidado con esto */
  
  useEffect(()=>{
    console.log("traeme todos los datos de la API")
    // todo fetch a la API

    return () => {
      console.log("limpiame los datos de la API")
    }
  }, [])

/*     useEffect(() => {
      console.log("se ejecuta cuando cambia valor");
    }, [valor]);

  useEffect(() => {
    console.log("se ejecuta cuando cambia valor o flag");
  }, [valor, flag]);
 */
  //const [valor, setValor] = useState(1)
  //const refObject = useRef()
  //let x = 0;

/*   const incrementar = () => {
    //x+=1
    //console.log(x)
    setValor((x) => x + 1)
  } */

 /*    const decrementar = () => {
      //x+=1
      //console.log(x)
      setValor((x) => x - 1);
      console.log(refObject.current);
    };
 */    

  return (
    <>
{/*       <p>{valor}</p>
      <input ref={refObject} />
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button> */}

      <button onClick={() => setValor(!valor)}>Valor</button>
      <button onClick={() => setFlag(!flag)}>Flag</button>
    </>
  );
}

export default App
