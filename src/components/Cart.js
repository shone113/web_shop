import React from 'react';

import CartItem from './CartItem';

import { CartContainer } from '../style/CartElements';
import SubtotalMenu from './SubtotalMenu';

const Cart = () => {
  return (
    <>
      <CartContainer>
        <CartItem />
        <SubtotalMenu />
      </CartContainer>
    </>
 
  )
}

export default Cart