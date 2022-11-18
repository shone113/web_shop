import React from 'react';

import { 
  ProductsContainer,
  ProductCard,
  ProductTitle,
  ProductImg,
  PriceTag,
  DeliveryTag,
  AddButton,
  RemoveButton
 } from '../style/ProductsElements';

import {CartState} from '../context/Context';

const Products = () => {

  const {
    state:{products}, 
    state: {cart}, 
    dispatch,
    productState: {sort, byStock, byFastDelivery, searchQuery}
} = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if(sort){
      sortedProducts = sortedProducts.sort((a, b) => (
        sort==="lowToHigh" ? a.price - b.price : b.price - a.price
      ))
    }

    if(!byStock){ 
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if(byFastDelivery){ 
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if(searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().startsWith(searchQuery)
      )
    }
    return sortedProducts;
  }

  return (
    <>
      <ProductsContainer>
        {
          transformProducts().map((product) => {
            return(
              <ProductCard key={product.userId}>
                <ProductImg src={product.image} alt={product.name} />
                <ProductTitle>{product.name}</ProductTitle>
                <PriceTag>{product.price}</PriceTag>
                <DeliveryTag>{product.fastDelivery}</DeliveryTag>
                {
                  cart.some(p => p.id === product.id) ? (
                    <AddButton 
                    // onClick={() => {
                    //   dispatch({
                    //     type: "ADD_ONE",
                    //     payload: {
                    //       id: product.id,
                    //     }
                    //   })
                    // }}
                    >Add To Cart</AddButton>
                  ) : (
                    <AddButton onClick={() => {
                      dispatch({
                        type: 'ADD_TO_CART',
                        payload: product
                      })
                    }}>Add To Cart</AddButton>
                  )
                }
              </ProductCard>
            )
          })
        }
      </ProductsContainer>
    </>
  )
}

export default Products