import React, {createContext, useContext} from 'react'
import {products} from '../data/products'

export const CartContext = createContext({
  items: products,
  addItem: (id) => {},
  removeItem: (id) => {},
  clearCart: () => {}
});


//created a hook 
export const useCart = () => {
  return useContext(CartContext)
}

export const CartContextProvider = CartContext.Provider
