import React from 'react'
import { useState } from 'react';
import SearchInput from './common/SearchInput';
import Slider from './common/Slider';
import ShopCategories from './ShopCategories';

const Shop = (props) => {
    // debugger



    return (
        <>

            <SearchInput />
            <Slider />

            <ShopCategories />



        </>
    )
}

export default Shop;