"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const allData = [
  {
    title: "Exclusive Offer",
    subtitle: "New User",
    offer: "First Flight",
    code: "apkatrip",
    imageUrl: "/Images/apka trip6 (1).webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "TopOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Flights Offer",
    subtitle: "New User",
    offer: "First Flight",
    code: "apkatrip",
    imageUrl: "/Images/apka trip1.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "FlightsOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Hotel Offer",
    subtitle: "New User",
    offer: "First Flight",
    code: "apkatrip",
    imageUrl: "/Images/apka trip2.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "HotelsOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Holiday Offer",
    subtitle: "New User",
    offer: "First Flight",
    code: "apkatrip",
    imageUrl: "/Images/apka trip3.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "HolidayOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Bank Offers",
    subtitle: "New User",
    offer: "First Flight",
    code: "apkatrip",
    imageUrl: "/Images/apka trip4.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "BankOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Bus Offers",
    subtitle: "New User",
    offer: "First Flight",
    code: "apkatrip",
    imageUrl: "/Images/apka trip7.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "BusOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Cabs",
    subtitle: "New User",
    offer: "First Flight",
    code: "apkatrip",
    imageUrl: "/Images/apka trip8.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "CabOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
];

const CustomSlider = ({ isLoading, children }) => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("TopOffer");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const tabs = [
    { id: "TopOffer", label: "Best Offers" },
    { id: "BankOffer", label: "Bank Offers" },
    { id: "FlightsOffer", label: "Flight" },
    { id: "HotelsOffer", label: "Hotel" },
    { id: "BusOffer", label: "Bus" },
    { id: "HolidayOffer", label: "Holidays" },
    { id: "CabOffer", label: "Cabs" },
  ];

  const filteredData =
    activeTab === "TopOffer"
      ? allData
      : allData.filter((item) => item.category === activeTab);

  const handleClick = (id) => {
    setActiveTab(id);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div>
        {/* Tabs Section */}
        <div className="relative pt-0 lg:pt-10 text-lg md:text-xl lg:text-3xl font-bold text-gray-900 flex justify-center items-center gap-2 my-5">
          Why book with us?
        </div>
        <div className="flex overflow-hidden mx-2 lg:mx-0 overflow-x-auto text-lg md:text-sm font-bold justify-start lg:justify-center scrollbar-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`py-2 text-sm text-nowrap px-4 text-center cursor-pointer ${
                activeTab === tab.id
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Swiper Component */}
        <div className="overflow-hidden md:mx-auto slider-main m-2 lg:m-5">
          {loading ? (
            <div className="flex flex-wrap justify-center gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[300px] p-3 rounded-xl border border-gray-200 bg-white-900"
                >
                  <div className="flex items-center justify-around rounded-md bg-gray-200">
                    <div className="flex flex-col justify-center pl-5">
                      <Skeleton height={25} width={200} />

                      <div className="mt-3">
                        <Skeleton height={40} width={200} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Skeleton height={20} width={150} />
                  </div>
                  <Skeleton height={50} width={250} />
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              spaceBetween={10}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
              }}
            >
              {filteredData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="flex flex-col w-[300px] p-3 rounded-xl border border-gray-200 bg-white-900"
                >
                  <div
                    className={`flex items-center justify-between rounded-md bg-[${item.bg}]`}
                  >
                    <div className="flex flex-col justify-center pl-5">
                      <div className="text-xs text-black-700 font-semibold">
                        {item.subtitle}
                      </div>
                      <div className="text-sm text-black-700 font-semibold">
                        {item.title}
                      </div>
                      <div className="text-xl font-bold text-black-800 mt-1">
                        {item.offer}
                      </div>
                      <div className="mt-3">
                        <div
                          className="bg-[#f78b48] text-white p-2 rounded-xl shadow cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                          style={{ border: "1px dashed white" }}
                        >
                          <div className="text-xs">Use Code:</div>
                          <div className="flex items-center">
                            <span className="font-bold" id={`code-${index}`}>
                              {item.code}
                            </span>
                            <button
                              className="ml-2 p-1 border rounded text-gray-500 hover:text-gray-700 transition duration-300"
                              onClick={() => copyToClipboard(item.code)}
                            >
                              <img
                                src="/Images/copy-icon.svg"
                                width="12"
                                alt=""
                                style={{ filter: "brightness(0) invert(1)" }}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href={item.link}>
                      <div className="ml-6">
                        <img
                          src={item.imageUrl}
                          alt=""
                          className="w-40 h-auto rounded-lg shadow-md"
                        />
                      </div>
                    </Link>
                  </div>
                  <Link href={item.link}>
                    {" "}
                    <h2 className="text-md font-bold text-black mb-0.1 mt-2">
                      Special Offer
                    </h2>{" "}
                  </Link>
                  <p className="text-sm text-gray-700 m-0">
                    {item.description}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className="view_btn my-10 flex justify-center">
          <Link
            href="/viewOffers"
            className="bg-[#2196F3] text-white py-2 px-4 rounded-full"
          >
            View Offers
          </Link>
        </div>
      </div>
    </>
  );
};

export default CustomSlider;
