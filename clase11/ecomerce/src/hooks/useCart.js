import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const useCart = () => {
    return useContext(CartContext)
}
