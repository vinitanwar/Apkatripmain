"use client"
import React, { useState } from 'react'
import { FaEyeSlash,FaEye } from "react-icons/fa";

const page = () => {

const [showpassword,setshowpassword]=useState({login:false,signup:false})
const [loginpage,setloginpage]=useState(true)


  return (
    <div className='min-h-[70vh] bg-[#d4d4d485] flex justify-center items-center'>
  <div className='relative'>
  <div className={ `absolute md:w-full max-h-full top-0 left-0 bg-white p-5 rounded-md shadow-md flex flex-col items-center gap-3  ${loginpage?"scale-0 origin-top-left":"scale-1 origin-bottom-right"} duration-700`}>
<div className='w-1/4'><img  src='/Images/newlogo.png'  /></div>

<div className='text-[#4B97F0] font-bold'>  <span className='text-orange-600'>Welcome </span> to  Apka Trip  </div>
<div className='w-full flex flex-col gap-1'>
<label htmlFor="number" >Mobile number</label>
<input type="text" id='number' placeholder='Enter mobile number'  className='border p-1 px-2 rounded-md'/>
</div>
<div className='w-full flex flex-col gap-1'>
<label htmlFor="password" >Password</label>
<div className='w-full relative'>
<input type={`${showpassword.login?"text":"password"}`} id='password' placeholder='Enter password' className='border p-1 px-2 rounded-md w-full' />
<div className='absolute right-5 top-1.5 cursor-pointer text-xl font-semibold'onClick={()=>setshowpassword( { login:!showpassword.login,signup:false})}>
 { showpassword.login?<FaEye />:< FaEyeSlash />}
</div>
</div>
</div>

<div className='text-blue-700 text-end w-full'>
    Forgot password?
</div>
<div>
    <button className='text-white bg-blue-600 px-4 py-1 rounded-lg font-semibold text-xl'>Login</button>
</div>

<div className='cursor-pointer' onClick={()=>setloginpage(true)} >
Don't have Account? Signup
</div>

  </div>





{/* sign up code  */}

  <div className={`bg-white p-2 md:p-5 w-full rounded-md shadow-md flex flex-col md:items-center gap-3  ${!loginpage?"scale-0 origin-bottom-right":"scale-1 origin-top-left"} duration-700`}>
<div className='flex justify-center'><img  src='/Images/newlogo.png'   className='w-1/2  md:w-1/4 '/></div>

<div className='text-[#4B97F0] font-bold text-center'>  <span className='text-orange-600'>Welcome </span> to  Apka Trip  </div>
<div className='md:w-full flex flex-col md:flex-row  md:gap-5' >
<div className=' flex flex-col gap-1 w-full'>
<label htmlFor="fname" >First Name</label>
<input type="text" id='fname' placeholder='First name'  className='border p-1 px-2 rounded-md'/>
</div>
<div className=' flex flex-col gap-1 md:w-full'>
<label htmlFor="lname" >Last Name</label>
<input type="text" id='lname' placeholder='Last name'  className='border p-1 px-2 rounded-md'/>
</div>


</div>
<div className='md:w-full flex flex-col gap-1'>
<label htmlFor="snumber" >Mobile number</label>
<input type="text" id='snumber' placeholder='Enter mobile number'  className='border p-1 px-2 rounded-md'/>
</div>
<div className='md:w-full flex flex-col gap-1'>
<label htmlFor="spassword" >Password</label>
<div className='w-full relative'>
<input type={`${showpassword.signup?"text":"password"}`} id='spassword' placeholder='Enter password' className='border p-1 px-2 rounded-md w-full' />
<div className='absolute right-5 top-1.5 cursor-pointer text-xl font-semibold' onClick={()=>setshowpassword( { login:false,signup:!showpassword.signup})}>
 { showpassword.signup?<FaEye />:< FaEyeSlash />}
</div>
</div>
</div>

<div className='text-blue-700 text-end w-full'>
    Forgot password?
</div>
<div className='text-center'>
    <button className='text-white bg-blue-600 px-4 py-1 rounded-lg font-semibold text-xl'>Login</button>
</div>

<div className='cursor-pointer text-center' onClick={()=>setloginpage(false)} >
 Already have account? Login
</div>

  </div>

  </div>

    </div>
  )
}

export default page
