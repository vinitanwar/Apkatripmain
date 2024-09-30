// import Link from 'next/link';
import React from 'react';
const AutoSearch = ({ value, onSelect }) => {

  const handleSelect = (city) => {
    console.log("Selected:", city);
    if (onSelect) onSelect(city); 
  };


  return (
    <div className="autosearch fromsectr" id="fromautoFill_in">
      <div className="searcityCol flex gap-3 bg-white p-3 items-center">
        <img src="/Images/icon-search.svg" alt="Search" />
        <input
          id="a_FromSector_show"
          type="text"
          className="srctinput autoFlll w-full text-black text-sm"
          placeholder={value}
          autoComplete="off"
        />
      </div>
      <div id="fromautoFill" className="text-black overflow-hidden h-72 overflow-y-auto">
        <div className="clr"></div>
        <div className="bg-[#ECF5FE] py-1 px-2 border-t border-[#ECECEC] text-sm font-semibold">Top Cities</div>
        <ul className="ausuggest">
          {[
            {
              code: "DEL",
              name: "Delhi",
              airport: "Indira Gandhi International Airport",
              country: "India",
            },
            {
              code: "BLR",
              name: "Bangalore",
              airport: "Bengaluru International Airport",
              country: "India",
            },
            // Add other cities here
          ].map((city) => (
            <li
              key={city.code}
              onClick={() => handleSelect(city)}
              className="border-b border-[#ececec] py-3 px-2 hover:bg-[#f7f7f7]"
            >
              <div className="flex px-2">
                <img
                  src="/Images/planeicon.svg"
                  alt="Flight"
                  className="mr-2"
                />
                <div>
                  <p>
                    <span className="font-semibold text-base">{`${city.name}(${city.code})`}</span>
                  </p>
                  <p className="text-xs font-medium mt-1 text-[#7E7979]">{city.airport}</p>
                </div>
                <div className="flex items-end font-medium text-xs text-[#7E7979] ml-auto">
                  {city.country}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoSearch;
