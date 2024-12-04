import React from "react";
import WhyUs from '.././Component/AllComponent/insurance/WhyUs'
import Benefits from '.././Component/AllComponent/insurance/Benefits'

function page() {
  return (
    <div>
      <div className='h-[70vh] bg-[url("/insurance/insuranceBanner.webp")] bg-cover bg-center flex justify-center items-center px-5 md:px-16 lg:px-20'>
        <div className="text-center lg:space-y-8">
          {/* <h5 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>Welcome to ApkaTrip - Travel INSURANCE.</h5> */}
        </div>
      </div>
      <div>
        <Benefits/>
        <WhyUs/>
      </div>
    </div>
  );
}

export default page;
