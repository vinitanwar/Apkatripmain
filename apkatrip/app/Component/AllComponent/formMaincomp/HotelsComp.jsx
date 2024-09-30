"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCalendarWeek, FaChevronDown } from "react-icons/fa";
import AutoSearch from "../AutoSearch";
import TravellerDropdown from "../TravellerDropdown";
import Link from "next/link";

const HotelComp = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleCheckboxChange = (event) => {
    // Your logic here for handling checkbox change
  };

  const [fromCity, setFromCity] = useState({
    code: "DEL",
    name: "Delhi",
    airport: "Indira Gandhi International Airport",
  });
  const [toCity, setToCity] = useState({
    code: "MUM",
    name: "Mumbai",
    airport: "Chhatrapati Shivaji Maharaj International Airport",
  });

  const handleCitySelect = (city) => {
    if (selectedOption === "from") {
      setFromCity(city);
    } else if (selectedOption === "to") {
      setToCity(city);
    }
    setIsVisible(false); // Hide the dropdown after selection
  };

  const handleVisibilityChange = (value) => {
    setIsVisible(value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Array of day names
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDateComponents = (date) => {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: String(date.getDate()).padStart(2, "0"),
      dayOfWeek: daysOfWeek[date.getDay()],
    };
  };

  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + 3);

  const currentDateComponents = getDateComponents(currentDate);
  const futureDateComponents = getDateComponents(futureDate);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const handleClick = (option) => {
    setSelectedOption(option);
    setIsVisible(true);

    switch (option) {
      case "from":
        handleFromClick();
        break;
      case "to":
        handleToClick();
        break;
      case "traveller":
        handleToClick(); // Add the appropriate handler for traveller
        break;
      default:
        console.log("Unknown option:", option);
    }
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFromClick = () => {
    // Your logic for 'From' click
    console.log("From clicked");
  };

  const handleToClick = () => {
    // Your logic for 'To' click
    console.log("To clicked");
  };

  return (
    <>
      <div className="flex flex-col hidden lg:block justify-end custom-color text-white md:px-10 lg:px-52  py-10">
        <div className="flex justify-end ">
          <span className=" text-lg mb-2 mr-5 font-bold ">
            Cheapest price Hotels. Guaranteed!!
          </span>
        </div>

        <div className=" flex justify-center gap-0">
          <div
            className="flex flex-col bg-white relative px-4 py-3 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
            onClick={() => handleClick("from")}
          >
            <p className="text-sm text-[#7E7979] font-medium">
              Enter City Name or Specific hotel
            </p>
            <span className="text-3xl py-1 text-black font-bold">
              {fromCity.name}
            </span>
            <p className="text-black text-xs truncate">
              [{fromCity.code}] {fromCity.airport}
            </p>
            {isVisible && selectedOption === "from" && (
              <div ref={dropdownRef}>
                <AutoSearch
                  value="From"
                  handleClosed={handleVisibilityChange}
                  onSelect={handleCitySelect}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col  px-8 py-3 bg-white  border-r hover:bg-[#ECF5FE]">
            <label className="text-sm text-[#7E7979] font-medium">
              Check-In
            </label>
            <div className="flex items-baseline text-black">
              <span className="text-3xl py-1 pr-1 text-black font-bold">
                {" "}
                {currentDateComponents.day}
              </span>
              <span className="text-sm font-semibold">
                {months[currentDateComponents.month]}'
              </span>
              <span className="text-sm font-semibold">
                {" "}
                {currentDateComponents.year}
              </span>
              <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
            </div>
            <p className="text-black text-xs">
              {currentDateComponents.dayOfWeek}
            </p>
          </div>
          <div className="flex flex-col  px-8 py-3 bg-white  border-r hover:bg-[#ECF5FE]">
            <label className="text-sm text-[#7E7979] font-medium">
              Check-Out
            </label>
            <div className="flex items-baseline text-black">
              <span className="text-3xl py-1 pr-1 text-black font-bold">
                {" "}
                {futureDateComponents.day}
              </span>
              <span className="text-sm font-semibold">
                {" "}
                {months[futureDateComponents.month]}'
              </span>
              <span className="text-sm font-semibold">
                {futureDateComponents.year}
              </span>
              <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
            </div>
            <p className="text-black text-xs">
              {futureDateComponents.dayOfWeek}
            </p>
          </div>
          <div
            className="flex flex-col relative  px-8 py-3 bg-white border-r hover:bg-[#ECF5FE]"
            onClick={() => handleClick("traveller")}
          >
            <label className="text-sm text-[#7E7979] font-medium">
              Rooms & Guests
            </label>
            <div className="flex items-baseline text-black">
              <span className="text-3xl py-1 pr-1 text-black font-semibold">
                1
              </span>
              <span className="text-sm font-semibold flex items-center gap-1">
                Room
              </span>
              <span className="ml-2 text-3xl py-1 pr-1 text-black font-semibold">
                2
              </span>
              <span className="text-sm font-semibold flex items-center gap-1">
                Guests <FaChevronDown />
              </span>
            </div>

            {isVisible && selectedOption === "traveller" && (
              <div ref={dropdownRef}>
                <TravellerDropdown value="From" />
              </div>
            )}
          </div>
          <Link
            href="/hotelSearch"
            className="text-white flex items-center justify-center text-2xl font-bold px-10 py-4 bg-[#ef6614] rounded-br-lg rounded-tr-lg"
          >
            Search
          </Link>
        </div>

        <Link
           href="/listofhotels"
          className="flex justify-end "
        >
          <p
           
            className=" text-xs mt-4 mr-5 font-bold bg-white text-blue-600 py-1 px-3  rounded-full "
          >
            List of hotels
          </p>
        </Link>
      </div>
    </>
  );
};

export default HotelComp;
