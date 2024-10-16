"use client"
import { getAllhotelsapi } from '@/app/Component/Store/slices/hotelsSlices';
import React, { useEffect } from 'react'
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
const allhotel=useSelector((state)=>state.hotelsSlice)


useEffect(()=>{
dispatch(getAllhotelsapi(citycode))
},[])
console.log(allhotel)

  return (
    <div>
      sdfsd



    </div>
  )
}

export default Comp
