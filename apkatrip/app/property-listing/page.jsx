"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import FirstHotelListing from "./Prop-Listing-Component/FirstHotelListing"



const page = () => {
    const router=useRouter()
  const [loder,setloder]=useState(false)


useEffect(()=>{
const handelHoteluser=async()=>{
setloder(true)
const userIdCheck=JSON.parse(localStorage.getItem("hotelregid"))
if(!userIdCheck){
     router.push("/property-listing/login")

}
else{
  
}

setloder(false)
}
handelHoteluser()
},[])




    
  return (
    <div className='flex justify-center '>
    <FirstHotelListing />



    </div>
  )
}

export default page
