"use client"
import React from 'react'
import Topbar from './Component/Topbar'
import Header from './Component/AllComponent/Header'
import TopFlight from './Component/AllComponent/TopFlight'
import Book from './Component/AllComponent/Book'
import TipsTricks from './Component/AllComponent/TipsTricks'
import Navbar from './Component/AllComponent/Navbar'
import Footer from './Component/Footer'
import CustomSlider from './Component/AllComponent/Slider'



const page = () => {
  return (
    <>
     
      <Header />
      <CustomSlider/>
      <TopFlight />
      <Book />
      <TipsTricks />
  
      
    
    </>
  )
}

export default page
