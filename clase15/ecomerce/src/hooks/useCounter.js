import { useState } from "react";

function useCounter(initialState=0) {
    const [valor, setValor] = useState(initialState)
    const increment = () => {
            setValor(valor + 1)
    }
    const decrement = () => {
        setValor(valor - 1)
    }
    const reset = () => {
        setValor(initialState)
    }

    return {
        increment,
        decrement,
        reset,
        valor

    }
}

export default useCounter;
