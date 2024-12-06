"use client"
import React, { useState } from 'react'

const page = () => {
const [TravelStartDate,setTravelStartDate]=useState( new Date(Date.now()))

console.log(TravelStartDate)


  return (


    
    <div>
     
    {/* insurance header */}

<div className='flex bg-[#0a1a43]  justify-center p-10 pt-28'>
    <div className='flex gap-4 ' >
     
     <div>
      <p className='text-white font-semibold my-1'>Plan Category</p>
    <select>

    <option>
    DomesticTravelPolicy
    </option>
    <option>
    OverseasTravelInsurance
    </option>  <option>
    StudentOverseasInsurance
    </option>  <option>
    SchengenOverseasInsurance
    </option>  <option>
    InboundTravelPolicy
    </option>  <option>
    CancellationInsurance
    </option>



    </select>
    </div>


    <div>
      <p className='text-white font-semibold my-1'>Plan Coverage</p>
    <select>

    <option>
    US 
    </option>
    <option>
    Non_US 
    </option>  <option>
    WorldWide 
    </option>  <option>
    India 
    </option>  <option>
    Asia 
    </option>  <option>
    Canada 
    </option>
    <option>
    Australia  
    </option>
    <option>
    SchenegenCountries  
    </option>



    </select>
    </div>

    <div>
      <p className='text-white font-semibold my-1' >Plan Type:</p>
    <select>

    <option>
    SingleTrip 
    </option>
    <option>
    AMT 
    </option> 



    </select>
    </div>

  <div>
    

  </div>

             </div>
</div>













    </div>
  )
}

export default page
