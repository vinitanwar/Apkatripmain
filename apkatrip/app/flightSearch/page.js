"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {
  FaArrowRight,
  FaCheckCircle,
  FaFilter,
  FaMinusCircle,
  FaPlane,
  FaTimes,
  FaUsb,
  FaWheelchair,
} from "react-icons/fa";
import FlightFliter from "../Component/Filter/FlightFliter";
import Header from "../Component/AllComponent/Header";
import { FaSpoon } from "react-icons/fa6";

const page = () => {
  const [activePopup, setActivePopup] = useState(null); // store id of active popup

  const togglePopup = (id) => {
    if (activePopup === id) {
      setActivePopup(null); // close the popup if it's already open
    } else {
      setActivePopup(id); // open the popup with the clicked id
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    { time: "Nov 06", distance: "₹ 5195" },
    { time: "Nov 06", distance: "₹ 5195" },
    { time: "Nov 06", distance: "₹ 5195" },
    { time: "Nov 06", distance: "₹ 5195" },
    { time: "Nov 06", distance: "₹ 5195" },
    { time: "Nov 06", distance: "₹ 5195" },
    { time: "Nov 06", distance: "₹ 5195" },
    { time: "Nov 06", distance: "₹ 5195" },
    { time: "Nov 06", distance: "₹ 5195" },
    { time: "Nov 06", distance: "₹ 5195" },
    { time: "Nov 06", distance: "₹ 5195" },
    { time: "Nov 06", distance: "₹ 5195" },
  ];

  const [showDetailsIndex, setShowDetailsIndex] = useState(null); // State to manage which flight's details to show
  const [activeTab, setActiveTab] = useState("1");
  // Function to toggle the flight details visibility
  const toggle = (index) => {
    setShowDetailsIndex(showDetailsIndex === index ? null : index);
  };

  const flightData = [
    {
      id: 1,
      airline: "Air India Express",
      flightNumber: "I5 1569",
      departureTime: "19:15",
      departureCity: "New Delhi",
      duration: "04h 15m",
      stop: "1 stop via Surat",
      arrivalTime: "23:30",
      arrivalCity: "Bengaluru",
      price: "₹ 6,051",
      offer:
        "Get FLAT Rs. 324 OFF using code  | FLAT 15% OFF on Kotak cards using code ",
    },

    {
      id: 2,
      airline: "Air India Express",
      flightNumber: "I5 1569",
      departureTime: "19:15",
      departureCity: "New Delhi",
      duration: "04h 15m",
      stop: "1 stop via Surat",
      arrivalTime: "23:30",
      arrivalCity: "Bengaluru",
      price: "₹ 6,051",
      offer:
        "Get FLAT Rs. 324 OFF using code  | FLAT 15% OFF on Kotak cards using code ",
    },

    {
      id: 3,
      airline: "Air India Express",
      flightNumber: "I5 1569",
      departureTime: "19:15",
      departureCity: "New Delhi",
      duration: "04h 15m",
      stop: "1 stop via Surat",
      arrivalTime: "23:30",
      arrivalCity: "Bengaluru",
      price: "₹ 6,051",
      offer:
        "Get FLAT Rs. 324 OFF using code  | FLAT 15% OFF on Kotak cards using code ",
    },

    {
      id: 4,
      airline: "Air India Express",
      flightNumber: "I5 1569",
      departureTime: "19:15",
      departureCity: "New Delhi",
      duration: "04h 15m",
      stop: "1 stop via Surat",
      arrivalTime: "23:30",
      arrivalCity: "Bengaluru",
      price: "₹ 6,051",
      offer:
        "Get FLAT Rs. 324 OFF using code  | FLAT 15% OFF on Kotak cards using code ",
    },
  ];

  const cardData = [
    {
      price: "₹ 7,954 per adult",
      type: "Xpress Value",
      baggage: [
        {
          icon: <FaCheckCircle />,
          text: "7 Kgs Cabin Baggage",
        },
        {
          icon: <FaCheckCircle />,
          text: "15 Kgs Check-in Baggage",
        },
      ],
      flexibility: [
        {
          icon: <FaMinusCircle />,
          text: "Cancellation fee starts at ₹ 4,000 ",
        },
        {
          icon: <FaMinusCircle />,
          text: "Date Change fee starts at ₹ 3,000 ",
        },
      ],
      seatsMeals: [
        {
          icon: <FaMinusCircle />,
          text: "Chargeable Seats",
        },
        {
          icon: <FaMinusCircle />,
          text: "Chargeable Meals",
        },
      ],
      benefits:
        "Use code APKATRIP01 and get flat 22% instant discount on this flight",
      offerCode: null,
    },
    {
      price: "₹ 7,954 per adult",
      type: "Xpress Value",
      baggage: [
        {
          icon: <FaCheckCircle />,
          text: "7 Kgs Cabin Baggage",
        },
        {
          icon: <FaCheckCircle />,
          text: "15 Kgs Check-in Baggage",
        },
      ],
      flexibility: [
        {
          icon: <FaMinusCircle />,
          text: "Cancellation fee starts at ₹ 4,000 ",
        },
        {
          icon: <FaMinusCircle />,
          text: "Date Change fee starts at ₹ 3,000 ",
        },
      ],
      seatsMeals: [
        {
          icon: <FaMinusCircle />,
          text: "Chargeable Seats",
        },
        {
          icon: <FaMinusCircle />,
          text: "Chargeable Meals",
        },
      ],
      benefits:
        "Use code APKATRIP02 and get flat 10% instant discount on this flight",
      offerCode: null,
    },
    {
      price: "₹ 7,954 per adult",
      type: "Xpress Value",
      baggage: [
        {
          icon: <FaCheckCircle />,
          text: "7 Kgs Cabin Baggage",
        },
        {
          icon: <FaCheckCircle />,
          text: "15 Kgs Check-in Baggage",
        },
      ],
      flexibility: [
        {
          icon: <FaMinusCircle />,
          text: "Cancellation fee starts at ₹ 4,000 ",
        },
        {
          icon: <FaMinusCircle />,
          text: "Date Change fee starts at ₹ 3,000 ",
        },
      ],
      seatsMeals: [
        {
          icon: <FaMinusCircle />,
          text: "Chargeable Seats",
        },
        {
          icon: <FaMinusCircle />,
          text: "Chargeable Meals",
        },
      ],
      benefits:
        "Use code APKATRIP03 and get flat 20% instant discount on this flight",
      offerCode: null,
    },
    // Add more card data here
  ];
  return (
    <>
      <Header />
      <div className="block md:flex px-0 lg:px-28 items-start gap-3 my-5">
        {/* <div className="hidden md:block h-full sticky top-24 bg-white myshadow px-5  py-3 w-1/4">
          <div className="mb-8">
            <p className="font-bold text-[20px] mt-2 mb-5">Popular Filters</p>
            <p className="font-bold text-[16px] mb-4"></p>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Non Stop</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 6,706</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Refundable Fares</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 6,051</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>IndiGo</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 6,664</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Morning Departures</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 6,051</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="font-bold text-[16px] mb-4">Stops From New Delhi</p>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Non Stop</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 6,706</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>1 Stop</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 6,706</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="font-bold text-[16px] mb-4">Airlines</p>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Air India</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 9,676</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Air India Express</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 9,676</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Akasa Air</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 9,676</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>IndiGo</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 9,676</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>SpiceJet</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 9,676</p>
            </div>
            <div data-testid="" className="flex justify-between w-full mb-4">
              <span className="checkmarkOuter">
                <input type="checkbox" className="mr-2" />
                <label>Star Air</label>
              </span>
              <p className="text-[12px] text-gray-500">₹ 9,676</p>
            </div>
          </div>
        </div> */}
        <div className="hidden md:block w-1/4">
          <FlightFliter />
        </div>

        <div className="myshadow w-full md:w-3/4 bg-white px-2 md:px-5 py-3 overflow-hidden">
          <div className="custom-slider  flex items-center mt-5 ">
            <Slider {...settings} className="slider flex w-full items-center">
              {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center px-5 py-2 border justify-center ${
                    activeIndex === index ? "text-blue-600 border-blue-600" : ""
                  }`}
                >
                  <div>
                    <div className="flex text-sm md:text-lg items-center justify-center">
                      {item.time}
                    </div>
                    <div className="font-black text-sm md:text-lg flex items-center justify-center">
                      {item.distance}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div>
            {flightData.map((flight, index) => (
              <div key={flight.id} className="my-3 border p-2 md:p-5">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <img
                      src="/Images/logo-flight.webp"
                      className="w-10 h-10"
                      alt="airline logo"
                    />
                    <div className="hidden sm:block ">
                      <p className="font-bold text-black ">{flight.airline}</p>
                      <p className="text-black text-xs">
                        {flight.flightNumber}
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="mb-1 text-sm md:text-lg font-semibold">
                      {flight.departureTime}
                    </p>
                    <p className="text-black text-xs">{flight.departureCity}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-center text-sm md:text-lg">
                      {flight.duration.split(" ")[0]}
                      <font color="#757575"> </font>
                      {flight.duration.split(" ")[1]}
                      <font color="#757575"> </font>
                    </p>
                    <div>
                      <div className="relative">
                        <p
                          style={{
                            borderTop: "3px solid rgb(245, 166, 34)",
                          }}
                        ></p>
                      </div>
                      <p className="text-black text-xs mt-1">{flight.stop}</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="mb-1 text-sm md:text-lg font-semibold">
                      {flight.arrivalTime}
                    </p>
                    <p className="text-black text-xs">{flight.arrivalCity}</p>
                  </div>

                  <div className="flex items-center gap-x-3">
                    <div className="text-right flex-1">
                      <div className="text-black text-lg font-bold whitespace-nowrap ">
                        <span className="text-sm md:text-lg font-bold">
                          {flight.price}
                        </span>
                        <p className="text-sm text-gray-700 font-light leading-tight">
                          per adult
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => togglePopup("view-price")}
                      className="hidden sm:hidden md:block text-sm font-semibold h-8 text-blue-600 rounded-full px-4 bg-blue-200 border border-blue-600"
                    >
                      VIEW PRICES
                    </button>
                  </div>
                </div>

                <p className="my-4 p-1 text-center bg-yellow-100">
                  <span className="text-[9px] md:text-xs text-center ">
                    {flight.offer}
                  </span>
                </p>

                <div
                  className="hidden md:flex justify-between items-center text-sm card-footer-v2"
                  onClick={() => toggle(index)}
                >
                  <span className="text-blue-600 flex items-center gap-2">
                    View Flight Details <FaArrowRight />
                  </span>
                </div>

                {showDetailsIndex === index && (
                  <div className="">
                    <nav className="my-4 flex justify-between m-0 p-0 bg-[#f6f4f4] w-full float-left rounded-[20px]">
                      <button
                        onClick={() =>
                          setActiveTab({ ...activeTab, [index]: "1" })
                        }
                        aria-selected={activeTab[index] === "1"}
                        className={`cursor-pointer float-left p-2 list-none text-black text-sm  w-[23%] text-center font-medium${
                          activeTab[index] === "1"
                            ? " text-white rounded-full bg-[#2196f3]"
                            : ""
                        }`}
                      >
                        FLIGHT DETAILS
                      </button>
                      <button
                        onClick={() =>
                          setActiveTab({ ...activeTab, [index]: "2" })
                        }
                        aria-selected={activeTab[index] === "2"}
                        className={`cursor-pointer float-left p-2 list-none text-black text-sm  w-[23%] text-center font-medium${
                          activeTab[index] === "2"
                            ? " text-white rounded-full bg-[#2196f3]"
                            : ""
                        }`}
                      >
                        FARE SUMMARY
                      </button>
                      <button
                        onClick={() =>
                          setActiveTab({ ...activeTab, [index]: "3" })
                        }
                        aria-selected={activeTab[index] === "3"}
                        className={`cursor-pointer float-left p-2 list-none text-black text-sm  w-[23%] text-center font-medium${
                          activeTab[index] === "3"
                            ? " text-white rounded-full bg-[#2196f3]"
                            : ""
                        }`}
                      >
                        CANCELLATION
                      </button>
                      <button
                        onClick={() =>
                          setActiveTab({ ...activeTab, [index]: "4" })
                        }
                        aria-selected={activeTab[index] === "4"}
                        className={`cursor-pointer float-left p-2 list-none text-black text-sm  w-[23%] text-center font-medium${
                          activeTab[index] === "4"
                            ? " text-white rounded-full bg-[#2196f3]"
                            : ""
                        }`}
                      >
                        DATE CHANGE
                      </button>
                    </nav>

                    <div className="">
                      {activeTab[index] === "1" && (
                        <div className="">
                          <span className="border w-full p-2 text-sm font-bold ">
                            New Delhi to Bengaluru , 20 Sep
                          </span>
                          <div className="">
                            <div className="flex items-center gap-5 my-4">
                              <img
                                src="/Images/logo-flight.webp"
                                alt=" "
                                className="w-6 h-6"
                              />
                              <span className="">
                                <strong>Air India</strong>{" "}
                                <span className="text-gray-500">AI | 514</span>
                              </span>
                              <span className="border border-gray-400 text-xs px-2 rounded-full text-gray-400">
                                Airbus A350
                              </span>
                            </div>

                            <div className="flex gap-10">
                              <div className="flex items-center justify-between w-[50%]">
                                <div className="">
                                  <p className="text-lg font-bold">03:35</p>
                                  <p className="text-sm font-bold mb-2">
                                    Fri, 20 Sep 24
                                  </p>
                                  <p className="text-gray-600">Terminal T3</p>
                                  <p className="text-sm">New Delhi, India</p>
                                </div>
                                <div
                                  className=" text-sm flex items-center"
                                  style={{
                                    borderBottom: "3px solid rgb(245, 166, 34)",
                                  }}
                                >
                                  02h 50m
                                </div>
                                <div className="">
                                  <p className="text-lg font-bold">06:25</p>
                                  <p className="text-sm font-bold mb-2">
                                    Fri, 20 Sep 24
                                  </p>
                                  <p className="text-gray-600">Terminal T2</p>
                                  <p className="text-sm">Bengaluru, India</p>
                                </div>
                              </div>

                              <div className="flex gap-10  w-[45%]">
                                <p>
                                  <span className="font-bold text-sm">
                                    BAGGAGE:
                                  </span>{" "}
                                  <br />
                                  <span className="text-gray-700">ADULT</span>
                                </p>
                                <p>
                                  <span className="font-bold text-sm">
                                    CHECK IN
                                  </span>{" "}
                                  <br />
                                  <span className="text-gray-700">15 Kgs</span>
                                </p>
                                <p>
                                  <span className="font-bold text-sm">
                                    CABIN
                                  </span>{" "}
                                  <br />
                                  <span className="text-gray-700">7 Kgs</span>
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-10 flex-wrap mt-5">
                              {/* Amenities */}
                              <div className="flex items-center gap-2 mb-2">
                                <FaSpoon />
                                <div className="text-sm">
                                  Complimentary Meals
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <FaPlane />
                                <div className="text-sm">3-3-3 Layout</div>
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <FaWheelchair />
                                <div className="text-sm">
                                  Standard Recliner (31'' Legroom)
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <FaUsb />
                                <div className="text-sm">
                                  Power and USB Available
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab[index] === "2" && (
                        <div id="Tab-1-tabpane-2" className="fade tab-pane">
                          <div className="">
                            <span className="border w-full p-2 text-sm font-bold ">
                              Fare breakup
                            </span>

                            <div className="mt-4">
                              <table className="min-w-full table-auto border-collapse border border-gray-300">
                                <thead>
                                  <tr className="">
                                    <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                      TOTAL
                                    </th>
                                    <th className="border border-gray-300 px-4 text-sm py-2 text-left">
                                      ₹ 5,232
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      Base Fare
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      ₹ 4,442
                                    </td>
                                  </tr>
                                  <tr className="">
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      Surcharges
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      ₹ 790
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab[index] === "3" && (
                        <div id="Tab-1-tabpane-3" className="fade tab-pane">
                          <div className="">
                            <span className="border w-full p-2 text-sm font-bold ">
                              Cancellation Policy
                            </span>
                            <div className="mt-4">
                              <table className="min-w-full table-auto border-collapse border border-gray-300">
                                <thead>
                                  <tr className="">
                                    <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                      Time Frame
                                    </th>
                                    <th className="border border-gray-300 px-4 text-sm py-2 text-left">
                                      Airline Fee + Apka Trip Fee (Per
                                      Passenger)
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      0 hours to 4 hours*
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      Non Refundable
                                    </td>
                                  </tr>
                                  <tr className="">
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      4 hours to 4 days*
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      ₹ 3,999 + ₹ 300
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      4 days to 365 days*
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      ₹ 2,999 + ₹ 300
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab[index] === "4" && (
                        <div id="Tab-1-tabpane-4" className="fade tab-pane">
                          <div className="">
                            <span className="border w-full p-2 text-sm font-bold ">
                              Date Change Policy
                            </span>
                            <div className="overflow-x-auto mt-4">
                              <table className="min-w-full table-auto border-collapse border border-gray-300">
                                <thead>
                                  <tr className="">
                                    <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                      Time Frame
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                      Airline Fee + Apka Trip Fee (Per
                                      Passenger)
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      0 hours to 4 hours*
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      ADULT : <b>Non Changeable </b>
                                    </td>
                                  </tr>
                                  <tr className="">
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      4 hours to 4 days*
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      ADULT :{" "}
                                      <b>₹ 2,999 + ₹ 300 + Fare difference</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      4 days to 365 days*
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm ">
                                      ADULT :{" "}
                                      <b>₹ 2,250 + ₹ 300 + Fare difference</b>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div
          className="icon-container fixed bottom-5 right-4 z-[9999] grid"
          onClick={() => togglePopup("flight-filter-popup")}
        >
          <FaFilter className="bg-[#52c3f1] text-white p-1 text-3xl rounded cursor-pointer" />
        </div>

        {activePopup === "flight-filter-popup" && (
          <div className="popup fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[10000]">
            <div className="popup-content shadow-lg">
              <button
                onClick={() => togglePopup("flight-filter-popup")}
                className="px-4 py-2 bg-blue-500 flex justify-between items-center w-full text-white"
              >
                Filter <FaTimes />
              </button>

              <FlightFliter />
            </div>
          </div>
        )}
      </div>

    {activePopup === "view-price" && (
        <div className="fixed inset-0 flex z-[9999] items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-md">
            <div className="flex items-center justify-between p-4">
              <p className="text-xl text-gray-900 flex items-center">
                <strong className="text-teal-600 mr-2">3 FARE OPTIONS </strong>{" "}
                {""} available for your trip.
              </p>
              <FaTimes
                className="text-white p-1 text-xl bg-gray-300 rounded-full"
                onClick={() => togglePopup("view-price")}
              />
            </div>
            <div className="flex  space-x-4 p-4">
              {cardData.map((data, index) => (
                <div
                  key={index}
                  className="w-80 h-auto bg-white border hover:border-blue-500 border-gray-200 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex flex-col">
                      <div className="text-lg font-bold text-black mb-1">
                        {data.price}
                      </div>
                      <div className="text-sm text-gray-600">{data.type}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <p className="font-semibold text-gray-800 mb-2">
                        Baggage
                      </p>
                      <ul className="list-disc">
                        {data.baggage.map((item, index) => (
                          <li key={index} className="flex items-center mb-1">
                            {React.cloneElement(item.icon, {
                              className: "text-green-500 w-4 h-4 mr-2 ",
                            })}
                            <span className="text-sm text-gray-700">
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold text-gray-800 mb-2">
                        Flexibility
                      </p>
                      <ul className="list-disc">
                        {data.flexibility.map((item, index) => (
                          <li key={index} className="flex items-center mb-1">
                            {React.cloneElement(item.icon, {
                              className: "text-[#ffc057] w-4 h-4 mr-2 ",
                            })}

                            <span className="text-sm text-gray-700">
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold text-gray-800 mb-2">
                        Seats, Meals & More
                      </p>
                      <ul className="list-disc">
                        {data.seatsMeals.map((item, index) => (
                          <li key={index} className="flex items-center mb-1">
                            {React.cloneElement(item.icon, {
                              className: "text-[#ffc057] w-4 h-4 mr-2 ",
                            })}
                            <span className="text-sm text-gray-700">
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {data.benefits && (
                      <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-800">{data.benefits}</p>
                      </div>
                    )}
                    {data.offerCode && (
                      <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                        <p className="text-sm text-gray-800">
                          {data.offerCode}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-4 border-t border-gray-200 flex justify-between items-center">
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 font-semibold text-base rounded-lg">
                      LOCK NOW
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 font-semibold text-base rounded-lg">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} 
    </>
  );
};

export default page;
