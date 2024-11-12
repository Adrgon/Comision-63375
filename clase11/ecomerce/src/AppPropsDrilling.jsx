import { useState } from "react";

export default function AppPropsDrilling() {
    const [numero, setNumero] = useState(10)
    //const numero = 10;

    return (
        <ComponentA numero={numero} />
    )
}

function ComponentA({numero}) {
    return (
        <ComponentB numero={numero} />
    )
}

function ComponentB({numero}) {
    return (
        <ComponentC numero={numero} />
    )
}

function ComponentC({numero}) {
    return (
        <div>
            <h1>{numero}</h1>
        </div>
    )
}
