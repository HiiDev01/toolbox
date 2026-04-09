import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) =>{
    const [cartOpen, setCartOpen] = useState(false);

    const toogleCart = ()=>{
        setCartOpen(prev => !prev)
    }

    const closeCart = ()=>{
        setCartOpen(false)
    }

    return (
        <CartContext.Provider value={{cartOpen, toogleCart, closeCart}}>
            {children}
        </CartContext.Provider>
    )
}