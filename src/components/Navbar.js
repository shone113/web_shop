import React from 'react';

import {
    Nav,
    NavLogo,
    NavInput,
    NavButton,
    Cart,
    ItemCount,
    CartLink,
    ButtonContainer,
    DropdownContent,
    DropLink,
    DropItem,
    DropImg,
    DropTitle,
    DropPrice
} from '../style/NavElements';

import { CartState } from '../context/Context';
import Data from '../Data.json';

const Navbar = () => {

  const {state: {cart}, dispatch, productDispatch} = CartState();

  return (
    <>
        <Nav>
            <NavLogo to='/'>Shopping Cart</NavLogo>
            <NavInput 
              placeholder='Search...'
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                })
              }
                }
            />
            <ButtonContainer>
              <NavButton>
                  <Cart />
                  <ItemCount to='cart'>{cart.length}</ItemCount>
              </NavButton>      
              <DropdownContent>
                {
                  cart.map((product) => {
                    return(
                      <DropLink to='cart'>
                      <DropItem>
                        <DropImg src={product.image}/>
                        <DropTitle>({product.qty}) &nbsp; &nbsp; {product.name}</DropTitle>
                        <DropPrice>Price: ${(product.price) * (product.qty)}</DropPrice>
                      </DropItem>
                      </DropLink>
                    );
                  })
                }
              </DropdownContent>
            </ButtonContainer>

        </Nav>
    </>
  )
}

export default Navbar