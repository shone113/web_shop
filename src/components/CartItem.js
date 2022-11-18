import React from 'react';

import { 
    CartItemContainer,
    ImgContainer,
    ItemImage,
    ItemPrice,
    ItemCount,
    DeleteItem,
    CartItems
 } from '../style/CartItemElements';
import { CartState } from '../context/Context';

const CartItem = () => {

  const {state:{products}, state: {cart}, dispatch} = CartState();

  return (
    <CartItems>
        {
          cart.map((product) => {
            return(
                <CartItemContainer>
                    <ImgContainer>
                        <ItemImage src={product.image} alt={product.name} />
                    </ImgContainer>
                    <ItemPrice>$ &nbsp; {product.price * product.qty}</ItemPrice>
                    <ItemCount 
                      type="number"
                      min="1" 
                      value={product.qty}
                      onChange={(e) => {
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: product.id,
                              qty: e.target.value
                            }
                          })
                
                      }}

                    
                    />
                    <DeleteItem 
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product
                        })
                      }}
                    />
                </CartItemContainer>
            )
          })
        }
    </CartItems>
    )
}

export default CartItem