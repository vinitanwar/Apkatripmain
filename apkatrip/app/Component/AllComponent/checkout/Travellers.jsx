"use client";

import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoIosThumbsUp } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { FaArrowDown, FaPhone, FaPhoneAlt, FaRupeeSign } from "react-icons/fa";
import { RiArrowDropDownLine, RiHospitalLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowDown19, FaCheck } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

const page = ({ setActiveTab }) => {
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

  const [showAdult, setShowAdult] = useState(null);
  const handleAdultDropdown = (index) => {
    setShowAdult((preval) => (preval == index ? null : index));
    console.log(index);
  };

  const AdultList = [{}];
  const [adultList, setShowAdultLIst] = useState(AdultList);
  const [showError, setShowError] = useState(false);
  const addAdult = (obj) => {
    if (isChecked) {
      setShowError(!showError);
    } else {
      setShowError(false);
      setShowAdultLIst([...adultList, obj]);
    }
  };
  const [showflyer, setShowFlyer] = useState(false);
  const handleShow = () => {
    setShowFlyer(!showflyer);
  };

  const [isChecked, setIsChecked] = useState(true);
  const handleInputCheck = () => {
    setIsChecked(!isChecked);
  };

  const [showPhoneError, setShowPhoneError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showAdultError, setShowAdultError] = useState(false);
  const handleClick = () => {
    if (phoneNumber.trim() === "") {
      setShowPhoneError(true);
    } else if (!isChecked) {
      setShowAdultError(true);
    }else {
      setShowPhoneError(false);
      setActiveTab(3);
    }
  };
  return (
    <div className="">
      <div className="md:grid md:grid-cols-6 gap-5 mt-3">
        <div className=" col-span-4 leftSide space-y-6">
          <div className="FirstChild border rounded-lg shadow-lg">
            <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg">
              <div className="flex items-center gap-3 ">
                <div className="border-4 bg-white border-orange-100  h-10 w-10 flex justify-center items-center text-2xl rounded-full">
                  <GiAirplaneDeparture />
                </div>
                <span className="text-sm md:text-xl font-medium">
                  Flight Detail
                </span>
              </div>
            </div>
            <div className=" ">
              <div className=" rounded-sm border  px-3 py-4 relative space-y-5">
                <h3 className="bg-gray-600 text-white text-xs w-fit px-3 font-bold rounded-br-xl absolute top-0 left-0">
                  Depart
                </h3>
                <div className="flex items-center gap-3 text-md md:text-xl">
                  <IoAirplaneSharp className=" font-bold -rotate-45" />
                  <div className="flex items-center gap-1">
                    <h4 className="">Delhi -Mumabi</h4>
                    <p className="border-s-2 border-black px-2  text-sm">
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
                      <p className="text-sm md:text-lg">Indigo</p>
                      <p className="text-xs">6E-6022</p>
                      <p className="text-xs">ECONOMY</p>
                    </div>
                  </div>

                  <div className="flex  w-full  gap-2 justify-between md:w-[70%] md:px-3">
                    <div className="flex flex-col gap-1  items-start">
                      <h4 className="font-extrabold text-md md:text-xl">
                        15:10
                      </h4>
                      <div className="flex flex-col text-xs ">
                        <span className="font-bold text-nowrap">
                          Delhi (DEL)
                        </span>
                        <span>Fri-20 Sep 2024</span>
                        <span>Terminal -1</span>
                      </div>
                    </div>

                    <div className="flex  flex-col gap-4 items-center">
                      <p className="text-xs">02h 10m</p>
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
                      <h4 className="font-extrabold text-sm md:text-xl">
                        17:40
                      </h4>
                      <div className="flex flex-col text-xs ">
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
                  <h3 className="bg-gray-200  font-bold w-fit text-gray-800 rounded-full px-5 text-xs py-1">
                    saver
                  </h3>
                  <p className="text-xs text-gray-400">Fare Rules Baggage</p>
                </div>
                {/* payment page part */}
                <div className="border-2 ">
                  <div className="p-2 bg-gray-50">
                    <div className="flex justify-between items-center mx-20  text-sm font-semibold">
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
                        <h6 className=" text-black text-sm font-semibold capitalize">
                          Indigo
                        </h6>
                        <p className="text-gray-500 text-[12px] font-semibold">
                          6E-2766
                        </p>
                      </div>
                    </div>
                    <div className="text-black text-sm font-semibold capitalize  w-[28%]">
                      15 kgs
                    </div>
                    <div className="text-black text-sm font-semibold capitalize w-[20%]">
                      7 kgs
                    </div>
                  </div>
                </div>
                {/* payment page part */}
              </div>
            </div>
          </div>

          <div className="FirstChild border rounded-lg shadow-lg">
            <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg">
              <div className="flex items-center gap-3 ">
                <div className="border-4 bg-white border-orange-100  h-10 w-10 flex justify-center items-center text-2xl rounded-full">
                  <GiAirplaneDeparture />
                </div>
                <span className="text-sm md:text-xl font-medium">
                  Travellers Details
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">ADULT</h3>
              {showError && (
                <p className="text-base text-red-500 p-2 ">
                  You have already selected 1 ADULT . Remove before adding a new
                  one
                </p>
              )}
              {showAdultError && (
                <p className="text-base text-red-500 p-2 ">
                  You need to select an ADULT to proceed
                </p>
              )}
              {adultList.map((elm, index) => (
                <div
                  key={index}
                  className="m-4  rounded-lg shadow-lg border-2 "
                >
                  <div>
                    <div className="flex items-center justify-between p-4">
                      <div className="flex gap-4 items-center">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {
                            handleInputCheck();
                          }}
                          className="bg-blue-600 h-6 w-6"
                        />
                        <h3 className="text-lg font-semibold">
                          Mr Himanshu Mehra
                        </h3>
                      </div>

                      <div>
                        <button
                          onClick={() => {
                            handleAdultDropdown(index);
                          }}
                        >
                          <RiArrowDropDownLine className="text-4xl" />
                        </button>
                      </div>
                    </div>

                    {showAdult == index && (
                      <div className="p-4 border rounded-md shadow-lg ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                          {/* Title */}
                          <div>
                            <label className="block text-[10px] font-bold text-gray-900 mb-1">
                              Title
                            </label>
                            <select
                              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            >
                              <option value="">Title</option>
                              <option value="Mr">MR</option>
                              <option value="Ms">MS</option>
                              <option value="Mrs">Mrs.</option>
                            </select>
                          </div>

                          {/* First Name */}
                          <div>
                            <label className="block text-[10px] font-bold text-gray-900 mb-1">
                              First Name &amp; Middle Name (if any)
                            </label>
                            <input
                              type="text"
                              placeholder="Enter First Name"
                              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>

                          {/* Last Name */}
                          <div>
                            <label className="block text-[10px] font-bold text-gray-900 mb-1">
                              Last Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Last Name"
                              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block text-[10px] font-bold text-gray-900 mb-1">
                              Email ID{" "}
                              <small className="text-gray-500">
                                (Optional)
                              </small>
                            </label>
                            <input
                              type="email"
                              placeholder="Enter Email ID"
                              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          {/* Contact Number */}
                          <div>
                            <label className="block text-[10px] font-bold text-gray-900 mb-1">
                              Contact Number{" "}
                              <small className="text-gray-500">
                                (Optional)
                              </small>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Contact Number"
                              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            handleShow();
                          }}
                          className="text-base text-red-500 py-4 "
                        >
                          (+) Frequent flyer number and Meal preference
                          (optional)
                        </button>
                        {showflyer && (
                          <div className="flex flex-wrap gap-2">
                            {/* Frequent Flyer */}
                            <div>
                              <label className="block text-[10px] font-bold text-gray-900 mb-1">
                                Frequent Flyer No.
                              </label>
                              <input
                                type="text"
                                placeholder="Frequent Flyer Number"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>

                            {/* Airline */}
                            <div>
                              <label className="block text-[10px] font-bold text-gray-900 mb-1">
                                Airline
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Airline Name"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>

                            {/* Meal Preference */}
                            <div>
                              <label className="block text-[10px] font-bold text-gray-900 mb-1">
                                Meal Preference
                              </label>
                              <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
                                <option value="">Select Meal Preference</option>
                                <option value="Vegetarian Hindu Meal">
                                  Vegetarian Hindu Meal
                                </option>
                                <option value="Baby Meal">Baby Meal</option>
                                <option value="Hindu (Non Vegetarian) Meal">
                                  Hindu (Non Vegetarian) Meal
                                </option>
                                <option value="Kosher Meal">Kosher Meal</option>
                                <option value="Moslem Meal">Moslem Meal</option>
                                <option value="Vegetarian Jain Meal">
                                  Vegetarian Jain Meal
                                </option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-6 bg-gray-100 border-t">
                      <p className="text-xs text-gray-600 font-medium ">
                        Adds-On (Optional)
                      </p>
                      <p className="text-xs text-gray-600 font-medium ">
                        Pre-booked meals, Seats and Baggage are 30% cheaper than
                        on-board price.
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => {
                  addAdult({});
                }}
                className="text-blue-600 text-md font-semibold "
              >
                + Add Adult
              </button>
            </div>
          </div>

          <div className="gap-2">
            <h3 className="text-xl">Contact Information</h3>
            <p className="text-[12px] text-gray-500 mt-1">
              Your Mobile number will be used only for sending flight related
              communication
            </p>
          </div>

          {showPhoneError && (
            <p className="text-sm p-4 my-2 w-fit bg-[#ab2515] text-white font-medium">
              Please enter a valid mobile number
            </p>
          )}

          <div className="flex items-center gap-2 py-2">
            {/* Country Code Input */}
            <div className="flex items-center border-2 p-3 rounded-l-md bg-gray-100">
              <span className="text-gray-600 font-medium">+91</span>
            </div>

            {/* Phone Number Input */}
            <div style={{ position: "relative", flexGrow: 1 }}>
              <input
                type="text" // Changed to "text" to control input manually
                className="border-2 border-l-0 p-3 w-full rounded-r-md focus:outline-none"
                autoComplete="off"
                value={phoneNumber}
                onChange={(e) => {
                  // Only allow numeric values and ensure a 10-digit input
                  const value = e.target.value
                    .replace(/[^0-9]/g, "")
                    .slice(0, 10);
                  setPhoneNumber(value);
                }}
                required
                placeholder="Enter Mobile Number"
                style={{
                  paddingLeft: "2.5rem", // Space for the icon
                }}
              />
              <FaPhoneAlt
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  fontSize: "1.5rem",
                  color: "#888",
                }}
              />
            </div>
          </div>

          <div className="flex items-start gap-2 mt-3">
            <input type="checkbox" className="mt-1" defaultChecked />
            <p className="text-sm text-gray-500">
              I understand and agree to the rules,{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>
              ,{" "}
              <a href="#" className="text-blue-500 underline">
                User Agreement
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 underline">
                Terms & Conditions
              </a>{" "}
              of EaseMyTrip
            </p>
          </div>
        </div>

        <div className=" w-full md:col-span-2 rightSide space-y-4 md:px-4  ">
          <div className="sticky top-0">
            <div className="priceBoxAndDetails border rounded shadow-lg">
              <div className="border rounded-t flex items-center px-3 py-2 bg-[#D1EAFF]">
                <h3>Price Summary</h3>
              </div>
              <div className="flex justify-between px-3 py-3 text-sm border-b">
                <p>Adult x 1</p>
                <p className="flex  items-center font-bold text-xs">
                  <FaRupeeSign />
                  4516
                </p>
              </div>
              <div className="flex justify-between px-3 py-3 text-xs border-b">
                <p>Total Taxes +</p>
                <p className="flex  items-center font-bold">
                  <FaRupeeSign />
                  4516
                </p>
              </div>
              <div className="flex justify-between px-3 py-3 t border-b">
                <p>Medical Refund Policy </p>
                <div className="flex items-center gap-2 text-xs">
                  <p className="flex  items-center font-bold line-through">
                    <FaRupeeSign />
                    4516
                  </p>
                  <span className="font-bold text-green-500">Free</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-3 py-3 font-bold text-lg text-red-600">
                <p>Grand Total</p>
                <p className="flex items-center">
                  <FaRupeeSign />
                  5,235
                </p>
              </div>
            </div>
            <div className="offersAndPromoCode border rounded shadow-lg">
              <div className="bg-[#2196F3] px-3 py-2 text-white ">
                Offers and Promo Codes
              </div>
              <div className="border-b py-3 px-3 flex justify-center lg:justify-beween flex-wrap gap-2 lg:gap-0">
                <input
                  type="text"
                  placeholder="ENTER COUPON CODE"
                  className="border-b outline-none text-gray-600 uppercase font-semibold text-sm w-fit"
                />
                <div>
                  <button className="bg-[#2196F3] px-16 lg:px-8 py-3 lg:py-1 rounded-full text-sm font-bold text-white">
                    apply
                  </button>
                </div>
              </div>

              <div className="applyOffers  max-h-[300px] overflow-hidden overflow-y-scroll ">
                {offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="flex items-start gap-2 border-b py-4 px-3"
                  >
                    <div className="rounded-full w-[22px] flex items-center justify-center h-[18px] border hover:bg-gray-700">
                      <FaCheck className="text-xs text-white" />
                    </div>
                    <div>
                      <h6 className="font-bold text-xs">{offer.title}</h6>
                      <p className="text-xs">{offer.description}</p>
                      <p className="text-[10px] font-bold uppercase text-[#2196F3]">
                        {offer.terms}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="booking">
              <button
                className="bg-[#DA5200] text-xl text-white rounded-full w-full py-4 mt-4"
                onClick={() => {
                  handleClick();
                }}
              >
                Continue Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
