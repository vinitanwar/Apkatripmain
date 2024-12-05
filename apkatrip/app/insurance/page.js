'use client';
import React from "react";
import WhyUs from '.././Component/AllComponent/insurance/WhyUs';
import Benefits from '.././Component/AllComponent/insurance/Benefits';
import Steps from '.././Component/AllComponent/insurance/Steps';
import FAQ from '.././Component/AllComponent/insurance/insuranceFAQ';

function page() {
  return (
    <div>
      {/* Banner Section */}
      <div className="h-[60vh] bg-gradient-to-r from-[#331c29] to-[#3e3842] bg-cover bg-center flex justify-center items-center px-5 md:px-16 lg:px-20">
        <div className="text-center  space-y-4 lg:space-y-8 max-w-2xl">
          <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Welcome to ApkaTrip - Travel Insurance
          </h5>
          <p className="text-sm md:text-base lg:text-lg font-medium text-gray-200">
            Secure your journey with ApkaTrip's comprehensive travel insurance. 
            Whether you're traveling for leisure or business, our plans cover unexpected 
            events like trip cancellations, medical emergencies, or lost luggage. 
            Explore the world with peace of mind knowing that we’ve got you covered!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div>
        <Benefits />
        <WhyUs />
        <Steps />
        <FAQ />
      </div>
    </div>
  );
}

export default page;
