import { createContext, useState } from "react";




export const CartContext = createContext()
//export const CartContext = React.createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const addItem = () =>{console.log("Logica de agregar al carrito")}
    const removeItem = () =>{}
    const isInCart = () =>{}
    const totalQuantity = 100

    
    const obj={
        cart, isInCart, addItem, totalQuantity, removeItem, setCart
    } 
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}
