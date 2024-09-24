import React from 'react'
import Herosection from '../../Components/main/Home/Herosection'
import MultipleService from '../../Components/main/MultipleService'
import Advertisment from '../../Components/main/Home/Advertisment'
import FoodsCart from '../../Components/main/Home/FoodsCart'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const foods = useLoaderData()
  console.log(foods)
  return (
    <div className='my-30'>
      <Herosection />
      <FoodsCart/>
      <MultipleService />
      <Advertisment />
    </div>
  )
}

export default Home
