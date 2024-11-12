import { useEffect, useRef } from "react"

function Ejemplo() {
    const buttonRef = useRef()

    useEffect(() => {
        const boton = buttonRef.current
        const handleClick = (e) => console.log(e)
        boton.addEventListener('click', handleClick)

        return () => {
            boton.removeEventListener('click', handleClick)
        }
    }, [])

    const manejoClick = (e) => {
        console.log(e)
    }

  return (
    <div>
      <button ref={buttonRef}>Nativos</button>
      <button onClick={manejoClick} >Sintetico</button>
    </div>
  );
}

export default Ejemplo
