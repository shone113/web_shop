import React, { useEffect, useState } from 'react';

import {
    SubContainer,
    SubHeader,
    SubAmount
} from '../style/SubtotalElements';

import { CartState } from '../context/Context';

const SubtotalMenu = () => {

  const {state: {cart}} = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [cart])

  return (
    <SubContainer>
        <SubHeader>Subtotal ({cart.length}) items</SubHeader>
        <SubAmount>Total: ${total}</SubAmount>
    </SubContainer>
  )
}

export default SubtotalMenu