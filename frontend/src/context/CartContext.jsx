import React, { useState,createContext, Children } from "react";
export const CartContext = createContext();
export const CartProvider = ({children}) =>{
    const[cart,setCart] = useState([])
    const addtoCart = (product) =>{
        setCart([...cart,product])
        alert("Added to Cart")
    }
    return(
        <CartContext.Provider value={{cart,addtoCart}}>
            {children}
        </CartContext.Provider>
    )
}