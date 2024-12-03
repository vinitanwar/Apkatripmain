import React from "react";

function TravellerTabs() {
  return (
    <div className="border-2 text-start">
      <div className="p-2 bg-gray-50">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:mx-12   text-md font-semibold">
          <div >
            <p className="text-gray-400 lg:text-center ">Airline</p>
            <div className="flex justify-start items-center gap-6 mb-2 lg:mb-0">
              <div className="flex  items-center   md:bg-transparent pr-3 rounded-t-lg md:rounded-t-none py-2 lg:py-4 md:py-0">
                <img
                  src="/Images/checkout/Indigo.webp"
                  alt="refund policy"
                  className="h-9 w-9 lg:h-7 lg:w-7 rounded-lg"
                />
              </div>
              <div className="h-12">
                <h6 className=" text-black text-md font-semibold capitalize">
                  Indigo
                </h6>
                <p className="text-gray-500 text-[12px] font-semibold">
                  6E-2766
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-400 ">Check-in-Baggage</p>

            <div className="text-black text-md font-semibold capitalize h-12 ">
              15 kgs
            </div>
          </div>
          <div >
            <p className="text-gray-400">Cabin Baggage</p>
            <div className="text-black text-md font-semibold capitalize h-12">
              7 kgs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravellerTabs;
