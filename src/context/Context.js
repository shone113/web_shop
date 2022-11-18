import React, { useContext, useReducer } from 'react';
import { createContext } from "react";
import Data from '../Data.json';
import { cartReducer, productReducer } from './Reducers';

const Cart = createContext();

const Context = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, {
        products: Data,
        cart: []
    });

    const [productState, productDispatch] = useReducer(productReducer,{
      byStock: false,
      byFastDelivery: false,
      searchQuery: "",
    })

  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => {
    return useContext(Cart);
}