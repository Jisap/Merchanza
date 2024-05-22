import React from 'react'
import all_products from '../assets/all_products'

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {

  const contextValue = {all_products}

  return (
    <ShopContextProvider.Provider value={contextValue}>
      {props.children}
    </ShopContextProvider.Provider>
  )
}

export default ShopContextProvider