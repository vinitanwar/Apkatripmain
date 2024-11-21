"use client"
import { useRouter } from 'next/navigation'
import React from 'react'




const page = () => {
    const router=useRouter()
  
    router.push("/property-listing/login")



    
  return (
    <div className='flex justify-center '>
    
    



    </div>
  )
}

export default page
