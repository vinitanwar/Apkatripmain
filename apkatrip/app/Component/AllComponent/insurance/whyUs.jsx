"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="overflow-hidden flex justify-center flex-col lg:flex-row lg:space-x-6 px-4 lg:px-20 gap-10 py-8 lg:py-16">
      <div className="lg:w-1/2 p-4 space-y-8" data-aos="fade-right">
        <div className="text-justify">
          <h2 className="text-3xl font-bold text-gray-800">
            Why <span className="text-red-600">Choose Us</span>
          </h2>
        </div>
        <p className="text-sm mb-6">
          At ApkaTrip, our dedication to safety and comfort extends to meeting
          our clients' needs for coverage or convenient access to help during
          special occasions, business, or leisure activities.
          Our affordable plans will cover everything from lost luggage to
          medical emergencies, and our customer service representatives are
          available 24/7 to assist you with any issues you may be having. You
          can travel knowing that ApkaTrip will be there for you no matter what.
        </p>
        <div className="grid grid-cols-1 gap-5 lg:gap-8 font-semibold">
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">Comprehensive Coverage for medical, trip cancellations, and baggage loss</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">Tailored Plans for families, solo travelers, and business trips</span>
          </div>
          
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">Easy Claims Process for fast and efficient resolutions</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-xl mr-2" />
            <span className="text-sm">          Affordable Pricing with extensive coverage options
            </span>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2" data-aos="fade-left">
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
