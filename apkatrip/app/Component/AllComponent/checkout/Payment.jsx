"use client";

import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoIosThumbsUp } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { FaEdit, FaRupeeSign } from "react-icons/fa";
import { RiHospitalLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import PaymentMode from '../../AllComponent/checkout/PaymentMode'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import Link from "next/link";

const page = ({setActiveTab}) => {
  // const [inuranceShowMOre,setInuranceShowMOre]=useState(false)
  const [insuranceHide, setInsurance] = useState(false);

  const offers = [
    {
      id: 1,
      title: "DELIGHT",
      description:
        "Win a flight, hotel stay, and holidays and get assured voucher worth INR 4000",
      terms: "T&C apply",
    },
    {
      id: 2,
      title: "UPIPAY",
      description:
        "Get up to Rs. 750 Off on Flights and holidays and get assured voucher ",
      terms: "T&C apply",
    },
    {
      id: 3,
      title: "HSBCEMI",
      description:
        "Use this coupon and get up to Rs 4000 off holidays and get assured voucher",
      terms: "T&C apply",
    },
    {
      id: 1,
      title: "AUEMI",
      description:
        "Use this coupon get Rs 4005 OFF For  payments holidays and get assured voucher",
      terms: "T&C apply",
    },
    {
      id: 2,
      title: "UPIPAY",
      description: "Get up to Rs. 750 Off on Flights",
      terms: "T&C apply",
    },
  ];

  const hospitalizationData = [
    { id: 1, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 2, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 3, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 4, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 5, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 6, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 7, title: "Hospitalization", sumInsured: "INR 1,00,000" },
  ];

  return (
    <div className="">
      
      <div className="md:grid md:grid-cols-6 gap-5 mt-3">
        <div className=" col-span-4 leftSide space-y-6">
          <div className="FirstChild border rounded-lg shadow-lg">
            <div className="bg-[#D5EEFE] py-3 px-2 rounded-t-lg">
            <div className="bg-[#D5EEFE]  rounded-t-lg relative">
              <div className="flex items-center gap-3">
                <div className="border-4 bg-white border-orange-100 h-10 w-10 flex justify-center items-center text-2xl rounded-full">
                  <GiAirplaneDeparture />
                </div>
                <span className="text-md md:text-xl font-medium">
                  Booking Details
                </span>
              </div>

              {/* Edit Ribbon */}
              <div
                onClick={()=>setActiveTab(1)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center bg-blue-500 text-white px-6 py-2 font-semibold rounded-l-lg"
                style={{
                  clipPath:
                    "polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)",
                }}
              >
                <span className="mr-2">Edit</span>
                <FaEdit className="h-3 w-3 text-current" />
              </div>
            </div>
            </div>
            <div className=" ">
              <div className=" rounded-md border  px-3 py-4 relative space-y-5">
                <h3 className="bg-gray-600 text-white text-sm w-fit px-3 font-bold rounded-br-xl absolute top-0 left-0">
                  Depart
                </h3>
                <div className="flex items-center gap-3 text-md md:text-xl">
                  <IoAirplaneSharp className=" font-bold -rotate-45" />
                  <div className="flex items-center gap-1">
                    <h4 className="">Delhi -Mumabi</h4>
                    <p className="border-s-2 border-black px-2  text-md">
                      Fri-20Sept2024
                    </p>
                  </div>
                </div>
                <div className="flex  gap-5 flex-col  md:flex-row items-start  justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="flex items-center gap-4 ">
                    <img
                      src="/Images/checkout/Indigo.webp"
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    <div>
                      <p className="text-md md:text-lg">Indigo</p>
                      <p className="text-sm">6E-6022</p>
                      <p className="text-sm">ECONOMY</p>
                    </div>
                  </div>

                  <div className="flex  w-full  gap-2 justify-between md:w-[70%] md:px-3">
                    <div className="flex flex-col gap-1  items-start">
                      <h4 className="font-extrabold text-md md:text-xl">
                        15:10
                      </h4>
                      <div className="flex flex-col text-sm ">
                        <span className="font-bold text-nowrap">
                          Delhi (DEL)
                        </span>
                        <span>Fri-20 Sep 2024</span>
                        <span>Terminal -1</span>
                      </div>
                    </div>

                    <div className="flex  flex-col gap-4 items-center">
                      <p className="text-sm">02h 10m</p>
                      <div className="border-t-2 border-black border-dotted w-full flex justify-center relative">
                        <div className="absolute -top-3 bg-white text-lg rounded-full">
                          <GiAirplaneDeparture />
                        </div>
                      </div>
                      <span className="border border-green-400 px-6 md:px-8 m-0 py-1 rounded-full font-bold text-[0.5rem]">
                        REFUNDABLE
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 items-start">
                      <h4 className="font-extrabold text-md md:text-xl">
                        17:40
                      </h4>
                      <div className="flex flex-col text-sm ">
                        <span className="text-nowrap font-bold">
                          Mumbai (BOM)
                        </span>
                        <span>Fri-20 Sep 2024</span>
                        <span>Terminal -2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-5">
                  <h3 className="bg-gray-200  font-bold w-fit text-gray-800 rounded-full px-5 text-sm py-1">
                    saver
                  </h3>
                  <p className="text-sm text-gray-400">Fare Rules Baggage</p>
                </div>
                {/* payment page part */}
                <div className="border-2 ">
                  <div className="p-2 bg-gray-50">
                  <div className="flex justify-between items-center mx-20  text-md font-semibold">
                    <p className="text-gray-400">Airline</p>
                    <p className="text-gray-400">Check-in-Baggage</p>
                    <p className="text-gray-400">Cabin Baggage</p>
                  </div>
                  </div>
                  <div className="flex justify-between items-start p-2">
                    <div className="flex justify-start items-center w-[35%] gap-6">
                      <div className="flex  items-center   md:bg-transparent px-3 rounded-t-lg md:rounded-t-none py-4 md:py-0">
                        <img
                          src="/Images/checkout/Indigo.webp"
                          alt="refund policy"
                          className="h-7 w-h-7 rounded-lg"
                        />
                      </div>
                      <div className="">
                        <h6 className=" text-black text-md font-semibold capitalize">
                          Indigo
                        </h6>
                        <p className="text-gray-500 text-[12px] font-semibold">6E-2766</p>
                      </div>
                    </div>
                    <div className="text-black text-md font-semibold capitalize  w-[28%]">15 kgs</div>
                    <div className="text-black text-md font-semibold capitalize w-[20%]">7 kgs</div>
                  </div>
                </div>
                {/* payment page part */}

              </div>
            </div>
          </div>








        <div className="FirstChild border rounded-lg shadow-lg">
        <div className="bg-[#D5EEFE] py-3 px-2 rounded-t-lg">
            <div className="bg-[#D5EEFE]  rounded-t-lg relative">
              <div className="flex items-center gap-3">
                <div className="border-4 bg-white border-orange-100 h-10 w-10 flex justify-center items-center text-2xl rounded-full">
                  <GiAirplaneDeparture />
                </div>
                <span className="text-md md:text-xl font-medium">
                  Travelleres Details
                </span>
              </div>

              {/* Edit Ribbon */}
              <div
                onClick={()=>setActiveTab(2)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center bg-blue-500 text-white px-6 py-2 font-semibold rounded-l-lg"
                style={{
                  clipPath:
                    "polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)",
                }}
              >
                <span className="mr-2">Edit</span>
                <FaEdit className="h-3 w-3 text-current" />
              </div>
            </div>
            </div>
            <div>
            <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-4 text-md font-normal p-4">
  <li>
    <h3 className="font-medium">E-mail</h3>
    <p className="text-gray-600 pt-2 break-words">guptakhushi182@gmail.com</p>
  </li>
  <li>
    <h3 className="font-medium">Contact No.</h3>
    <p className="text-gray-600 pt-2">7988532993</p>
  </li>
  <li>
    <h3 className="font-medium">Adult (1)</h3>
    <p className="text-gray-600 pt-2">Mr. Manshu Mehra</p>
  </li>
  <li>
    <h3 className="font-medium">Child (0)</h3>
  </li>
  <li>
    <h3 className="font-medium">Infant (0)</h3>
  </li>
</ul>

               
            </div>
          </div>










          <div className="FirstChild border rounded-lg shadow-lg">
  <div className="flex flex-row justify-between items-center p-6 gap-4">
    <div className="flex items-center gap-4 text-center md:text-left">
      <img
        src="/Images/checkout/wallet.webp"
        alt="wallet"
        className="h-6 w-6 md:h-8 md:w-8 object-cover"
      />
      <span className="text-md md:text-base lg:text-lg font-medium">
        You have to login to use your <strong>wallet amount</strong>
      </span>
    </div>
    <Link
      className="bg-blue-500 text-white font-bold text-md md:text-base md:text-lg rounded-xl px-2 md:px-4 py-2 text-center"
      href="/"
    >
      Log In
    </Link>
  </div>
</div>


<div className="FirstChild border rounded-lg shadow-lg">
            <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg">
              <div className="flex items-center gap-3 ">
                <div className="border-4 bg-white border-orange-100  h-10 w-10 flex justify-center items-center text-2xl rounded-full">
                  <FaRupeeSign/>
                </div>
                <span className="text-md md:text-xl font-medium">
                Payment Mode
                </span>
              </div>
              
            </div>
            <div >
                  <PaymentMode/>
              </div>
          </div>


         
        </div>

        <div className=" w-full md:col-span-2 rightSide space-y-4 md:px-4  ">
          <div className="sticky top-0">
            <div className="priceBoxAndDetails border rounded shadow-lg">
              <div className="border rounded-t flex items-center px-3 py-2 bg-[#D1EAFF]">
                <h3>Price Summary</h3>
              </div>
              <div className="flex justify-between px-3 py-3 text-md border-b">
                <p>Adult x 1</p>
                <p className="flex  items-center font-bold text-sm">
                  <FaRupeeSign />
                  4516
                </p>
              </div>
              <div className="flex justify-between px-3 py-3 text-sm border-b">
                <p>Total Taxes +</p>
                <p className="flex  items-center font-bold">
                  <FaRupeeSign />
                  4516
                </p>
              </div>
              <div className="flex justify-between px-3 py-3 t border-b">
                <p>Medical Refund Policy </p>
                <div className="flex items-center gap-2 text-sm">
                  <p className="flex  items-center font-bold line-through">
                    <FaRupeeSign />
                    4516
                  </p>
                  <span className="font-bold text-green-500">Free</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-3 py-3 font-extrabold text-lg ">
                <p className="text-red-800">Grand Total</p>
                <p className="flex items-center text-red-800">
                  <FaRupeeSign className="text-red-800"/>
                  5,235
                </p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
