import React, { createContext, useState } from "react";
import all_product from '../Compenat/Assets/all_product'
export const ShopContext=createContext(null);
const GetDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
       cart[index]=0;
        
    }
    return cart;
}
const ShopContextProvider =(props)=>{

    const [cartItems,setCartItems]=useState(GetDefaultCart());
    
    const addToCart = (itemId) => {
        console.log('Adding to cart:', itemId);
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1,
        }));
    };
    
    const RemovToCart=(itemId)=>{
        setCartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]-1
        }))

    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };
    
    const ConextValue={getTotalCartAmount,all_product,cartItems,addToCart,RemovToCart}
   
    return(
        <ShopContext.Provider value={ConextValue}>
            {props.children}

        </ShopContext.Provider>
    )
}
export default ShopContextProvider;