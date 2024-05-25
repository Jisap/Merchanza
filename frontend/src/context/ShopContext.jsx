import React, { createContext, useState } from 'react'
import all_products from '../assets/all_products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {};
  for( let index=0; index < all_products.length+1; index++){
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}))    // prev hace referencia al valor del estado e itemId al id del pto
    //console.log(cartItems)
  }                                                                   // Para acceder al valor de ese pto utilizamos el identificador prev[itemId]
  
  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemid] - 1 }))
  }
  
  const contextValue = {all_products, cartItems, addToCart, removeToCart}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider