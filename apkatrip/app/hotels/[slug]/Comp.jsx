"use client"
import HotelComp from '@/app/Component/AllComponent/formMaincomp/HotelsComp';
import { getAllhotelsapi } from '@/app/Component/Store/slices/hotelsSlices';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Comp = ({slug}) => {
    const decodedSlug =  decodeURIComponent(slug)
    const params = new URLSearchParams(decodedSlug);
const citycode=params.get("citycode")

const checkin=params.get("checkin")
const checkout=params.get("checkout")
const adult=params.get("adult")
const child=params.get("child")
const roomes=params.get("roomes")

const dispatch=useDispatch()
const allhoteldata=useSelector((state)=>state.hotelsSlice)
const [allhotel,setallhotels]=useState()

useEffect(()=>{
dispatch(getAllhotelsapi(citycode))
},[])
useEffect(()=>{
setallhotels(allhoteldata)

},[allhoteldata])

console.log(allhotel && !allhotel.isLoading && allhotel.info && allhotel.info.Hotels)
  return (
   <>
   <HotelComp />
   <div>
{allhotel && allhotel.isLoading && <div className='h-[70vh] flex justify-center items-center'>
  
  <h4>Loading... </h4>
  </div>}

<div className='p-4 flex flex-col gap-3'>
{allhotel && !allhotel.isLoading && allhotel.info && allhotel.info.Hotels && allhotel.info.Hotels.map((info)=>{
  
  return(<div className='bg-gray-200 p-2 px-5 rounded-lg shadow-md '>
     <h3 className='text-center p-2 text-2xl font-bold '>{info.HotelName}</h3>
     <div>


     </div>
  <p className='text-end'> Address:<span className='text-green-500'>{info.Address}</span></p>

  </div>)
})





}
</div>


   </div>
   
   
   </>
  )
}

export default Comp
