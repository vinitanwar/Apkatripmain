"use client"
import React, { useState } from 'react'
import { FaRegSmileBeam } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoReload } from "react-icons/io5";









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



{/* insurance main  */}

<div className='bg-[#000000ad] text-white pt-20 pb-14'>


<div className='flex justify-around '>

  <div className='text-xl flex flex-col items-center'>
<i className='text-3xl'> <FaRegSmileBeam /> </i>
<p className='text-white'>5500+ Clients Trust Us</p>

  </div>



  <div className='text-xl flex flex-col items-center'>
<i className='text-3xl'> <GiClick /> </i>
<p className='text-white'>Exentsive Documentation
Clean Code</p>

  </div>
  <div className='text-xl flex flex-col items-center'>
<i className='text-3xl'> <RiCustomerService2Fill /> </i>
<p className='text-white'>Free Lifetime
Updates</p>

  </div>
  <div className='text-xl flex flex-col items-center'>
<i className='text-3xl'> <IoReload /> </i>
<p className='text-white'>Get Professional
Support</p>

  </div>




</div>










</div>











    </div>
  )
}

export default page
