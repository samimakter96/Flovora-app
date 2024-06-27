import React from 'react'
import Navbar from '../component/Navbar'
import CategoryMenu from '../component/CategoryMenu'
import FoodItems from '../component/FoodItems'
import Cart from '../component/Cart'

const Home = () => {
  return (
    <>
      <Navbar /> 
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </>
  )
}

export default Home