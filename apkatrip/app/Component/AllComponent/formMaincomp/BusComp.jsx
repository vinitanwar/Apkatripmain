"use client";
import React, { useEffect, useRef, useState } from "react";
import {
 
  FaCalendarWeek,
  FaChevronDown,
 
} from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getBuscityapi } from "../../Store/slices/busSearchSlice";

const BusComp = () => {
  
  const [fromCity, setFromCity] = useState({
    code: "DEL",
    CityName: "Delhi",
    airport: "Indira Gandhi International Airport",
  });
  const [toCity, setToCity] = useState({
    code: "MUM",
    name: "Mumbai",
    airport: "Chhatrapati Shivaji Maharaj International Airport",
  });



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
  const dispatch=useDispatch();
 const state=useSelector(state=>state.busCityslice)


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
const [searchparam,setsearchparam]=useState("")
 const handelBusSearch=(e)=>{
  dispatch(getBuscityapi(e.target.value))
  setsearchparam(e.target.value)
 }
console.log(state)

  return (
    <>
      <div className="flex flex-col hidden lg:block custom-color text-white md:px-10 lg:px-52  py-10">
    
              <span className=" text-lg mb-2 mr-2 font-bold  rounded-full ">Online Bus Tickets</span>
        
                <div className="bg-white custom-shadow grid grid-cols-4 gap-0 border-gray-300">
                
                <div className="relative">
                  <div
                    className="flex flex-col bg-white relative px-4 py-3 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
                    onClick={() => handleClick("from")}
                  >
                    <p className="text-sm text-[#7E7979] font-medium">From</p>
                    <span className="text-3xl py-1 text-black font-bold">
                      {fromCity.CityName}
                    </span>
                  
                  </div>

     <div className="absolute top-full bg-white w-full z-30">
<input type="text" value={searchparam} className="w-full text-black" placeholder="Search city..." onChange={(e)=>handelBusSearch(e)}  />
<div className="h-32 overflow-hidden overflow-y-scroll">
{state && !state.isLoading && state.info && state.info.BusCities &&state.info.BusCities.map((item)=>{
  return(
    <p className=" border-b-2 p-1 cursor-pointer">{item.CityName}</p>
  )
})}</div>
     </div>

                  </div>
                  <div
                    className="flex flex-col px-4 py-3 relative bg-white border-r hover:bg-[#ECF5FE]"
                    onClick={() => handleClick("to")}
                  >
                    <label className="text-sm text-[#7E7979] font-medium">
                      To
                    </label>
                    <span className="text-3xl py-1 text-black font-bold">
                      {toCity.name}
                    </span>
                   
                  </div>

                  <div className="flex flex-col  px-4 py-3 bg-white  border-r hover:bg-[#ECF5FE]">
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
                  
                  </div>
                 
                  <Link href="/busSearch" className="text-white flex items-center justify-center text-2xl font-bold p-4 primary-col rounded-br-lg rounded-tr-lg">
                    Search
                  </Link>
                </div>
                </div>
           </>
  );
};

export default BusComp;
