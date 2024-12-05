"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="overflow-hidden flex justify-center flex-col xl:flex-row xl:space-x-6 p-10 lg:px-20 gap-10 py-8 lg:py-16">
      <div className="xl:w-1/2 p-4 space-y-8 px-4" data-aos="fade-right">
        <div className="text-justify">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Why <span className="text-[#331c29]">Choose Us</span>
          </h2>
        </div>
        <p className="text-sm mb-6">
          ApkaTrip is that reliable travel companion that provides with full solutions to cater for the different needs of those travelers. From low-cost travel insurance to carefully planned holiday packages, we ensure you're satisfied with every service given. Our website is easily user-friendly, and the 24/7 support lets you never be far away from a helping hand which will make your travel tension-free.
          Holistic travel management is the best experience possible.
        </p>
        <div className="grid grid-cols-1 gap-5 lg:gap-8 font-semibold">
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">Holistic travel management, the best experience possible.</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">Unwavering Support Around the Clock</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">Personalized packages for each tourist</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">Affordable Price with 100% Transparency
            </span>
          </div>
        </div>
      </div>
      <div className="xl:w-1/2" data-aos="fade-left">
        <Image
          className="w-full h-auto object-cover"
          src="/insurance/whyUs.webp"
          alt="Why Choose Us"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
