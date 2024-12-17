"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBusSeatLayout } from '../../../Component/Store/slices/busSeatlayout';
import { FaChair } from "react-icons/fa";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";


const SelectSeaCompo=({slug})=>{
  const decodeslug=decodeURIComponent(slug);
const params=new URLSearchParams(decodeslug)

const resultindex=params.get("resultindex")

const index=params.get("index")
const dispatch =useDispatch();
const state=useSelector(state=>state.busSeatSlice)


const [busSeatInfo,setBusSeatInfo]=useState();
const [busBoarding,setBusBoarding]=useState();

console.log(busBoarding,"sfnceiocfiowecf")


useEffect(()=>{

dispatch(getBusSeatLayout({TraceId:index,ResultIndex:resultindex}))
},[])
useEffect(()=>{
setBusSeatInfo(state && state.info && state.info?.buslayout?.GetBusSeatLayOutResult);

setBusBoarding(state?.info?.busbording?.GetBusRouteDetailResult)
},[state])




  return (
    <div>
      {busSeatInfo &&<div>
        
        <div 
          
          className=''
          
          dangerouslySetInnerHTML={{
            __html:busSeatInfo?.SeatLayoutDetails?.HTMLLayout
          }}
  
          >

           
          </div>
      
          <p className="text-3xl font-bold text-center mb-6">Bus Seat Layout</p>
        {busSeatInfo?.SeatLayoutDetails?.SeatLayout.SeatDetails.map((setRow,rowindex)=>{
          return(
          <div Key={rowindex} className='flex  gap-2 px-10'>
        {  setRow.map((seat,index)=>{
            return(
              <div
            key={index}
            className={`flex flex-col items-center p-4 w-[18rem] border rounded-lg shadow-md transition-all duration-300 ${
              !seat.SeatStatus
                ? "bg-red-100 border-red-400" // Booked seats
                : "bg-green-100 border-green-400" // Available seats
            }`}
          >
            
            <FaChair
              className={`text-4xl ${
                !seat.SeatStatus ? "text-red-600" : "text-green-600"
              }`}
            />

            
            <span className="mt-2 text-lg font-semibold text-gray-800">
              Seat {seat.SeatName}
            </span>
            <span className="text-sm text-gray-500">
              ₹{seat.Price.OfferedPriceRoundedOff}
            </span>

          
            <span
              className={`text-xs mt-1 uppercase font-bold ${
                !seat.SeatStatus ? "text-red-500" : "text-green-500"
              }`}
            >
              {!seat.SeatStatus ? "Booked" : "Available"}
            </span>
          </div>
            )
            
            
            })}
          </div>
          
          
          )
          



          }) }</div>}




{
busBoarding &&
<>
<div className=" mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Bus Route Details
      </h1>

      {/* Boarding Points */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Boarding Points
        </h2>
        {busBoarding?.BoardingPointsDetails.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-blue-50 rounded-lg transition"
          >
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {point.CityPointName}
              </h3>
              <p className="text-gray-600 text-sm">
                <FaClock className="inline-block mr-1 text-gray-500" />
                Time: {new Date(point.CityPointTime).toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm">
                <FaPhoneAlt className="inline-block mr-1 text-gray-500" />
                Contact: {point.CityPointContactNumber}
              </p>
              <p className="text-gray-600 text-sm">
                Landmark: {point.CityPointLandmark}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dropping Points */}
      <div>
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Dropping Points
        </h2>
        {busBoarding?.DroppingPointsDetails.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-green-50 rounded-lg transition"
          >
            <FaMapMarkerAlt className="text-green-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {point.CityPointName}
              </h3>
              <p className="text-gray-600 text-sm">
                <FaClock className="inline-block mr-1 text-gray-500" />
                Time: {new Date(point.CityPointTime).toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm">
                Location: {point.CityPointLocation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>


</>

}





    </div>
  )
}

export default SelectSeaCompo
