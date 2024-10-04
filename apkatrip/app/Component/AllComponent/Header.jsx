"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCalendarWeek, FaChevronDown } from "react-icons/fa";
import AutoSearch from "./AutoSearch";
import TravellerDropdown from "./TravellerDropdown";
import Link from "next/link";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { searchFlightApi } from "../Store/slices/SearchFlight";
import { getTopAirPorts } from "../Store/slices/topPortsSlice";
import { useRouter } from "next/navigation";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

const Header = () => {
  const localTimeZone = getLocalTimeZone();
  const currentDate = today(localTimeZone);

  const [selected, setSelected] = useState();

  const [selectedReturn, setSelectedReturn] = useState();
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [isGroup, setIsGroup] = useState(false);
  const [selectedClass, setSelectedClass] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();
  const route = useRouter();

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const handleCheckboxChange = (event) => {};

  const [fromCity, setFromCity] = useState({
    id: 26555,
    ident: "VIDP",
    type: "large_airport",
    name: "Indira Gandhi International Airport",
    latitude_deg: "28.55563",
    longitude_deg: "77.09519",
    elevation_ft: "777",
    continent: "AS",
    iso_country: "IN",
    iso_region: "IN-DL",
    municipality: "New Delhi",
    scheduled_service: "yes",
    gps_code: "VIDP",
    iata_code: "DEL",
    local_code: "",
    home_link: "http://www.newdelhiairport.in/",
    wikipedia_link:
      "https://en.wikipedia.org/wiki/Indira_Gandhi_International_Airport",
    keywords: "Palam Air Force Station",
  });
  const [toCity, setToCity] = useState({
    id: 26434,
    ident: "VABB",
    type: "large_airport",
    name: "Chhatrapati Shivaji International Airport",
    latitude_deg: "19.0886993408",
    longitude_deg: "72.8678970337",
    elevation_ft: "39",
    continent: "AS",
    iso_country: "IN",
    iso_region: "IN-MM",
    municipality: "Mumbai",
    scheduled_service: "yes",
    gps_code: "VABB",
    iata_code: "BOM",
    local_code: "",
    home_link: "http://www.csia.in/",
    wikipedia_link:
      "https://en.wikipedia.org/wiki/Chhatrapati_Shivaji_International_Airport",
    keywords: "Bombay, Sahar International Airport",
  });

  const handleCitySelect = (city) => {
    if (selectedOption === "from") {
      setFromCity(city);
    } else if (selectedOption === "to") {
      setToCity(city);
    }
    setIsVisible(false);
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

  useEffect(() => {
    const getip = async () => {
      const data = await axios.get("https://api.country.is/");
      dispatch(getTopAirPorts(data.data.country));
    };
    getip();
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const handleClick = (option) => {
    setSelectedOption(option);
    setIsVisible(true);

    // switch (option) {
    //   case "from":
    //     handleFromClick();
    //     break;
    //   case "to":
    //     handleToClick();
    //     break;
    //   case "traveller":
    //     handleToClick(); // Add the appropriate handler for traveller
    //     break;
    //   default:
    //     console.log("Unknown option:", option);
    // }
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
  const handelSearch = () => {
    // Create a Date object
    const date = new Date(selected);

    const offset = -5 * 60; // Offset in minutes for GMT-0500
    const localDate = new Date(date.getTime() + offset * 60 * 1000);
    const localFormattedDate = localDate.toISOString().slice(0, 19); // This will give you "2024-10-11T00:00:00"

    dispatch(
      searchFlightApi({
        AdultCount: adultCount,
        ChildCount: childCount,
        InfantCount: infantCount,
        DirectFlight: true,
        OneStopFlight: false,
        JourneyType: 1,
        PreferredAirlines: null,
        Origin: fromCity.iata_code,
        Destination: toCity.iata_code,
        FlightCabinClass: selectedClass,
        PreferredDepartureTime: localFormattedDate,
        PreferredArrivalTime: localFormattedDate,
      })
    );

    route.push("/flightSearch");
  };

  const handleRangeChange = (newRange) => {
    const date = new Date(newRange.year, newRange.month - 1, newRange.day);

    setSelected(date);
    handleClick("");
  };
  const handelreturn = (newRange) => {
    const date = new Date(newRange.year, newRange.month - 1, newRange.day);
    setSelectedReturn(date);
    handleClick("");
  };
  console.log(selected);
  return (
    <>
      <div className="flex flex-col hidden lg:block custom-color text-white md:px-10 lg:px-52  py-10">
        <div>
          <div className="tabs flex gap-2 pb-2">
            <button
              className={`px-4 py-1 text-xs font-bold rounded-3xl ${
                activeTab === 1 ? "bg-white text-[#1853a2]" : ""
              } transition-colors duration-300 ease-in-out`}
              onClick={() => handleTabClick(1)}
            >
              One Way
            </button>
            <button
              className={`px-4 py-1 text-xs font-bold rounded-3xl ${
                activeTab === 2 ? "bg-white text-[#1853a2]" : ""
              } transition-colors duration-300 ease-in-out`}
              onClick={() => handleTabClick(2)}
            >
              Round Trip
            </button>
            <button
              className={`px-4 py-1 text-xs font-bold rounded-3xl ${
                activeTab === 3 ? "bg-white text-[#1853a2]" : ""
              } transition-colors duration-300 ease-in-out`}
              onClick={() => handleTabClick(3)}
            >
              Multicity
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 1 && (
              <>
                <div className="bg-white custom-shadow grid grid-cols-6 gap-0 border-gray-300">
                  <div className="relative">
                    <div
                      onClick={() => handleClick("from")}
                      className="flex flex-col bg-white  h-full px-4 py-2 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
                    >
                      <p className="text-sm text-[#7E7979] font-medium">From</p>
                      <span className="text-3xl py-1 text-black font-bold">
                        {fromCity.municipality}
                      </span>
                      <p className="text-black text-xs truncate">
                        [{fromCity.name}] {fromCity.iata_code}
                      </p>
                    </div>
                    {isVisible && selectedOption === "from" && (
                      <div>
                        <AutoSearch
                          value="From"
                          Click={setIsVisible}
                          handleClosed={handleVisibilityChange}
                          onSelect={handleCitySelect}
                        />
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <div
                      onClick={() => handleClick("to")}
                      className="flex flex-col px-4 py-2 h-full  bg-white border-r hover:bg-[#ECF5FE]"
                    >
                      <label className="text-sm text-[#7E7979] font-medium">
                        To
                      </label>
                      <span className="text-3xl py-1 text-black font-bold">
                        {toCity.municipality}
                      </span>
                      <p className="text-black text-xs truncate">
                        [{toCity.name}] {toCity.iata_code}
                      </p>
                    </div>

                    {isVisible && selectedOption === "to" && (
                      <div>
                        <AutoSearch
                          value="To"
                          fromCity={fromCity}
                          Click={setIsVisible}
                          handleClosed={handleVisibilityChange}
                          onSelect={handleCitySelect}


                        />
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <div
                      onClick={() => handleClick("date")}
                      className="flex h-full flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]"
                    >
                      <label className="text-sm text-[#7E7979] font-medium">
                        Departure Date
                      </label>
                      {!selected && (
                        <div className="text-black font-bold">
                          Select a Date
                        </div>
                      )}
                      {selected && (
                        <>
                          <div className="flex  items-baseline text-black">
                            <span className="text-3xl py-1 pr-1 text-black font-bold">
                              {" "}
                              {selected.getDate()}
                            </span>
                            <span className="text-sm font-semibold">
                              {selected.toLocaleString("default", {
                                month: "short",
                              })}
                              '
                            </span>
                            <span className="text-sm font-semibold">
                              {" "}
                              {selected.getFullYear()}
                            </span>
                            <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                          </div>
                          <p className="text-black text-xs">
                            {selected.toLocaleDateString()}
                          </p>
                        </>
                      )}
                    </div>
                    {isVisible && selectedOption === "date" && (
                      <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                        <Calendar
                          aria-label="Select a date"
                          value={""}
                          onChange={handleRangeChange}
                          minValue={currentDate}
                          
                        />
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <div
                      className="flex h-full flex-col   px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]"
                      onClick={() => handleClick("return")}
                    >
                      <label className="text-sm text-[#7E7979] font-medium">
                        Return Date
                      </label>
                      {!selectedReturn && (
                        <div className="text-black font-bold h-full align-bottom">
                          Select Return Flight
                        </div>
                      )}
                      {selectedReturn && (
                        <>
                          <div className="flex items-baseline text-black">
                            <span className="text-3xl py-1 pr-1 text-black font-bold">
                              {" "}
                              {selectedReturn.getDate()}
                            </span>
                            <span className="text-sm font-semibold">
                              {" "}
                              {selectedReturn.toLocaleString("default", {
                                month: "short",
                              })}
                              '
                            </span>
                            <span className="text-sm font-semibold">
                              {selectedReturn.toLocaleDateString()}
                            </span>
                            <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                          </div>
                          <p className="text-black text-xs">
                            {selectedReturn.getFullYear()}
                          </p>
                        </>
                      )}
                    </div>
                    {isVisible && selectedOption === "return" && (
                      <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                        <Calendar
                          aria-label="Select a date"
                          value={""}
                          onChange={handelreturn}
                          minValue={currentDate}
                          disabledDatesClassName=" opacity-50"
                        />
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <div
                      className="flex flex-col   px-4 py-2 bg-white border-r hover:bg-[#ECF5FE]"
                      onClick={() => handleClick("traveller")}
                    >
                      <label className="text-sm text-[#7E7979] font-medium">
                        Travelers
                      </label>
                      <div className="flex items-center text-black">
                        <span className="text-3xl py-1 pr-1 text-black font-bold">
                          1
                        </span>
                        <span className="text-sm font-semibold flex items-center gap-1">
                          Traveller(s) <FaChevronDown />
                        </span>
                      </div>
                      <p className="text-black text-xs">Economy</p>
                    </div>
                    {isVisible && selectedOption === "traveller" && (
                      <div ref={dropdownRef}>
                        <TravellerDropdown
                          setIsGroup={setIsGroup}
                          adultCount={adultCount}
                          setAdultCount={setAdultCount}
                          childCount={childCount}
                          setChildCount={setChildCount}
                          infantCount={infantCount}
                          setInfantCount={setInfantCount}
                          isGroup={isGroup}
                          setSelectedClass={setSelectedClass}
                          selectedClass={selectedClass}
                          handleClick={handleClick}
                          value="From"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handelSearch}
                    className="text-white flex items-center justify-center text-2xl font-bold p-4 primary-col rounded-br-lg rounded-tr-lg"
                  >
                    Search
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="tab-content">
            {activeTab === 2 && (
              <div className="bg-white custom-shadow grid grid-cols-6 gap-0 border-gray-300">
                <div
                  className="flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
                  onClick={() => handleClick("from")}
                >
                  <p className="text-sm text-[#7E7979] font-medium">From</p>
                  <span className="text-3xl py-1 text-black font-bold">
                    {fromCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{fromCity.code}] {fromCity.airport}
                  </p>
                  {isVisible && selectedOption === "from" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        Click={setIsVisible}
                        value="From"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>

                <div
                  className="flex flex-col px-4 py-2 relative bg-white border-r hover:bg-[#ECF5FE]"
                  onClick={() => handleClick("to")}
                >
                  <label className="text-sm text-[#7E7979] font-medium">
                    To
                  </label>
                  <span className="text-3xl py-1 text-black font-bold">
                    {toCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{toCity.code}] {toCity.airport}
                  </p>
                  {isVisible && selectedOption === "to" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        Click={setIsVisible}
                        value="To"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Departure Date
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
                <div className="flex flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Return Date
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
                  className="flex flex-col relative  px-4 py-2 bg-white border-r hover:bg-[#ECF5FE]"
                  onClick={() => handleClick("traveller")}
                >
                  <label className="text-sm text-[#7E7979] font-medium">
                    Travelers
                  </label>
                  <div className="flex items-center text-black">
                    <span className="text-3xl py-1 pr-1 text-black font-bold">
                      1
                    </span>
                    <span className="text-sm font-semibold flex items-center gap-1">
                      Traveller(s) <FaChevronDown />
                    </span>
                  </div>
                  <p className="text-black text-xs">Economy</p>

                  {isVisible && selectedOption === "traveller" && (
                    <div ref={dropdownRef}>
                      <TravellerDropdown value="From" />
                    </div>
                  )}
                </div>
                <Link
                  href=""
                  className="text-white flex items-center justify-center text-2xl font-bold p-4 primary-col  rounded-br-lg rounded-tr-lg"
                >
                  Search
                </Link>
              </div>
            )}
          </div>

          <div className="tab-content">
            {activeTab === 3 && (
              <div className="bg-white custom-shadow grid grid-cols-4 gap-0 border-gray-300">
                <div
                  className="flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r border-b hover:bg-[#ECF5FE] cursor-pointer"
                  onClick={() => handleClick("from")}
                >
                  <p className="text-sm text-[#7E7979] font-medium">From</p>
                  <span className="text-3xl py-1 text-black font-bold">
                    {fromCity.municipality}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{fromCity.name}] {fromCity.airport}
                  </p>
                  {isVisible && selectedOption === "from" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        Click={setIsVisible}
                        value="From"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>
                <div
                  className="flex flex-col px-4 py-2 border-b relative bg-white border-r hover:bg-[#ECF5FE]"
                  onClick={() => handleClick("to")}
                >
                  <label className="text-sm text-[#7E7979] font-medium">
                    To
                  </label>
                  <span className="text-3xl py-1 text-black font-bold">
                    {toCity.municipality}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{toCity.name}] {toCity.airport}
                  </p>
                  {isVisible && selectedOption === "to" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        Click={setIsVisible}
                        value="To"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col  px-4 py-2 bg-white  border-r border-b hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Departure Date
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
                <div className="flex flex-col  px-4 py-2 bg-white border-b rounded-tr-lg hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Travelers
                  </label>
                  <div className="flex items-center text-black">
                    <span className="text-3xl py-1 pr-1 text-black font-bold">
                      1
                    </span>
                    <span className="text-sm font-semibold flex items-center gap-1">
                      Traveller(s) <FaChevronDown />
                    </span>
                  </div>
                  <p className="text-black text-xs">Economy</p>
                </div>

                <div
                  className="flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
                  onClick={() => handleClick("from")}
                >
                  <p className="text-sm text-[#7E7979] font-medium">From</p>
                  <span className="text-3xl py-1 text-black font-bold">
                    {fromCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{fromCity.code}] {fromCity.airport}
                  </p>
                  {isVisible && selectedOption === "from" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        Click={setIsVisible}
                        value="From"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>

                <div
                  className="flex flex-col px-4 py-2 relative bg-white border-r hover:bg-[#ECF5FE]"
                  onClick={() => handleClick("to")}
                >
                  <label className="text-sm text-[#7E7979] font-medium">
                    To
                  </label>
                  <span className="text-3xl py-1 text-black font-bold">
                    {toCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{toCity.code}] {toCity.airport}
                  </p>
                  {isVisible && selectedOption === "to" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        Click={setIsVisible}
                        value="To"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col  px-4 py-2 bg-white  border-r border-b hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Departure Date
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
                <div className="flex items-center justify-center p-4 bg-white rounded-lg">
                  <div className="flex items-center justify-center  bg-white rounded-lg col-span-4 gap-3">
                    <button className="primary-col border border-[#ef6614] p-3 rounded-full text-white font-semibold">
                      Search
                    </button>
                    <button className="bg-white p-3  border rounded-full border-blue-500 text-blue-500 font-semibold">
                      + Add City
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex  mt-3 justify-between items-center">
            <nav className="defenceColm" id="divFamilyFare">
              <ul className="flex list-none p-0 m-0">
                <li className="mr-5">
                  <label className="container_df corp-hidden cscshw flex items-center">
                    {/* Defence Forces */}
                    Defence Forces
                    <input
                      name="FF"
                      id="chkArmy"
                      type="checkbox"
                      value=""
                      onChange={handleCheckboxChange}
                      className="ml-2"
                    />
                    <span className="checkmark_df"></span>
                  </label>
                </li>
                <li className="mr-5">
                  <label className="container_df corp-hidden cscshw flex items-center">
                    {/* Defence Forces */}
                    Students
                    <input
                      name="FF"
                      id="chkArmy"
                      type="checkbox"
                      value=""
                      onChange={handleCheckboxChange}
                      className="ml-2"
                    />
                    <span className="checkmark_df"></span>
                  </label>
                </li>
                <li className="mr-5">
                  <label className="container_df corp-hidden cscshw flex items-center">
                    {/* Defence Forces */}
                    Senior Citizens
                    <input
                      name="FF"
                      id="chkArmy"
                      type="checkbox"
                      value=""
                      onChange={handleCheckboxChange}
                      className="ml-2"
                    />
                    <span className="checkmark_df"></span>
                  </label>
                </li>
                <li className="mr-5">
                  <label className="container_df corp-hidden cscshw flex items-center">
                    {/* Defence Forces */}
                    Doctors Nurses
                    <input
                      name="FF"
                      id="chkArmy"
                      type="checkbox"
                      value=""
                      onChange={handleCheckboxChange}
                      className="ml-2"
                    />
                    <span className="checkmark_df"></span>
                  </label>
                </li>
              </ul>
            </nav>
            <Link
              href="/web-check"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 border border-white bg-[blue-500] text-white rounded hover:bg-[#49b2f0] transition"
            >
              <img
                src="/Images/Routes/web-checkin-icon-v1.svg"
                className="w-5"
                alt="Copy Code"
              />
              <span className="text-sm font-bold">Web Check-In</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
