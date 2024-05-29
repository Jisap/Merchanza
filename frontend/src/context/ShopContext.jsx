import React, { createContext, useState } from 'react'
import all_products from '../assets/all_products'
import CartItems from '../components/CartItems';

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
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {                                                     // item son claves (identificadores id)
      if (cartItems[item] > 0) {                                                         // cartItem[item] es el valor (cantidad) del producto agregado
        //console.log(cartItem[item])
        let itemInfo = all_products.find((product) => product.id === Number(item));     // Se busca en all_products ese producto 
        totalAmount += itemInfo.new_price * cartItems[item]                             // totalAmount = pto agregado * cantidad de ese pto  
      }
    }
    return totalAmount;
    //console.log(totalAmount)
  }
  
  const contextValue = {
    all_products, 
    cartItems, 
    addToCart, 
    removeToCart,
    getTotalCartAmount,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider