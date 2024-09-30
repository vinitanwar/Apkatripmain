// import Layout from "./Layout";

import Image from "next/image";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

const Page = () => {
  const features = [
    {
      icon: "/Images/drag.webp",
      title: "Effortless Methods",
      description:
        "The platform makes bookings and maintains payment history easy and convenient.",
    },
    {
      icon: "/Images/flight-information.webp",
      title: "Simple Adjustments",
      description: "Modifications are simple to make after booking.",
    },
    {
      icon: "/Images/insurance.webp",
      title: "Modest Policies",
      description:
        "Easy and flexible cancellation procedures are available for your trip reservations",
    },
  ];

  const facilitiesData = [
    {
      title: "Specialised White-Label Products",
      description:
        "Get exclusive access to cost-effective, precisely crafted goods and services.",
    },
    {
      title: "Advanced Technological APIs ",
      description:
        "Simplify every aspect of your company's operations with our technologically integrated APIs.",
    },
    {
      title: "Enhanced Control Panel",
      description:
        "Easily keep track of reservations for travel to improve the overall productivity of the business.",
    },
  ];
  return (
    <>
      <div className="w-full bg-[url('/Images/bg-images..webp')] bg-no-repeat bg-cover px-5 md:px-20 py-5 md:py-16 bg-center">
        <div className=" text-center py-5">
          <h1 className="text-white text-3xl md:text-4xl  lg:text-[50px] font-semibold relative leading-2 md:leading-[70px] ">
          Expand your travel company by using 
          {" "}
            <span className="text-blue-500 ">
              Apka Trip
              <span className="absolute block w-[55px] h-[5px] bg-[#1882FF] rounded-full top-[-15px] left-[8%] mx-auto"></span>
            </span>
          </h1>
          <p className="text-white  text-base md:text-[21px] my-[10px] mb-0 md:mb-[20px]">
          We are pleased to introduce you to Apka Trip, a new platform designed to handle your cherished clients' travel needs.

          </p>
        </div>
        <div className="rounded-lg w-full ">
          <img
            src="/Images/apkatripbanner.webp"
            className="mx-auto rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-10 items-center border border-[#1882FF] rounded-[15px] bg-white mx-4 md:mx-28 px-4 md:px-10 pb-5 md:pb-0">
        <div className="font-bold text-blue-600 text-[70px] md:text-[130px]">16</div>
        <div className="md:ml-8 text-center md:text-left">
          <h3 className="text-2xl md:text-5xl font-bold">Years of Working</h3>
          <p className="mt-4 text-gray-700">
          Founded in 2020, Apka Trip has grown to become one of India's top online travel portals. With a strong focus on customer satisfaction and comprehensive travel solutions, we have proudly collaborated with over 70,000 B2B agents and served more than 25 million customers to date.
          </p>
        </div>
      </div>

      <div className="block md:flex  justify-between px-5 md:px-28 py-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col w-full md:w-[36%] items-start p-4">
            <div className="sm:mr-2">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className=""
              />
            </div>
            <h3 className="text-xl py-3 font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="block md:flex ">
        <div className="bnrfly">
          <Image
            src="/Images/soft-img.webp"
            alt="Facilities"
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="object-cover w-auto h-full"
          />
        </div>
        <div className="bg-[#011d38] p-8 md:p-20 w-full ">
          <h4 className="text-xl md:text-4xl text-white font-bold">
          Examine Our 
            <span className="text-blue-600"> Specialised Resources</span>
          </h4>
          <div className=" mt-5"> 
            {facilitiesData.map((facility, index) => (
              <div key={index} className="flex gap-4 mt-5">
                <div className="">
                  <FaRegCheckCircle className="text-white text-2xl mt-1" />
                </div>
                <div className="text-white">
                  <div className="text-sm  md:text-xl font-semibold">{facility.title}</div>
                  <p className="text-white">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 md:px-28 py-16">
        <h4 className="text-xl md:text-3xl font-bold mb-4">
          What Makes Us The <span className="text-blue-500">Best Choice?</span>
        </h4>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/offer.webp"
                alt="Best commission structure"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">
              Best commission structure
            </div>
            <p>on all transactions and bookings</p>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/training.webp"
                alt="Live training"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">Live training</div>
            <p>and assistance on products</p>
          </div>
          <div className="flex flex-col text-center items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/megaphone.webp"
                alt="Regular Marketing"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">Regular Marketing</div>
            <p>and credit support to scale up your business</p>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/help-desk.webp"
                alt="24*7 Dedicated Support Center"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">
              24*7 Dedicated Support Center
            </div>
            <p>for resolving your query</p>
          </div>
          <div className="flex flex-col text-center items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/suitcase.webp"
                alt="Wide Range of Offerings"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">
              Wide Range of Offerings
            </div>
            <p>Including Flights, Cabs, Trains, Hotels, Cruises</p>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/group.webp"
                alt="Lead Generation"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">Lead Generation</div>
            <p>for your market segment</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[url('/Images/landing-page-bg-1..webp')] w-full bg-no-repeat bg-cover px-5 md:px-20 py-5 md:py-16 bg-center">
        <div className="text-center">
          <h2 className="text-2xl text-white font-semibold leading-snug">
          Begin now to elevate your business to new heights by becoming an 

            <span className="text-blue-600"> Apka Trip partner.</span>
          </h2>
          <a
            href="/login" 
            className="mt-4 inline-block bg-blue-500 rounded-full text-white font-bold py-2 px-4  hover:bg-blue-600 transition duration-300"
          >
            Sign In / Sign Up
          </a>
        </div>
      </div>
      <div className="text-sm text-white font-semibold bg-[#011d38] text-center py-4">
        Copyright © {new Date().getFullYear()} Apka Trip. All Rights Reserved.
      
    </div>
    </>
  );
};

export default Page;
