import { createContext, useContext } from "react";

const NumberContext = createContext();

function useNumber(){
    return useContext(NumberContext);
}

export default function AppUseContextHook() {
    const number = 4200;
    return (
      <NumberContext.Provider value={number}>
        <ComponentA />
      </NumberContext.Provider>
    );
}

function ComponentA() {

    return (
        <>
            <h2>Componente A</h2>
            <ComponentB />
        </>
    )
}

function ComponentB() {

    return (
        <>
            <h2>Componente B</h2>
            <ComponentC />
        </>
    )
}

function ComponentC() {
    const number = useNumber();
    return (
        <>
            <h2>Componente C</h2>
            <p>El numero es {number}</p>
        </>
    )
}
