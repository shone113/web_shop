import React from 'react';

import FilterMenu from './FilterMenu';
import Products from './Products';

import {HomeContainer} from '../style/HomeElements';

const Home = () => {
  return (
    <HomeContainer>
        <FilterMenu />
        <Products />
    </HomeContainer>
  )
}

export default Home