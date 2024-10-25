"use client";

import React, { useState } from "react";
import InfoSection from "./InfoSection";
import Link from "next/link";

const TopFlight = () => {
  const cityData = [
    {
      head: "Top Flight Routes",
      images: [
        {
          image: "/Images/london.webp",
          title: "New York to London",
          description: "Connecting Two Major Cities",
        },
        {
          image: "/Images/lose.webp",
          title: "Los Angeles to Tokyo",
          description: "Gateway to Asia",
        },
        {
          image: "/Images/tokyo.webp",
          title: " Sydney to Auckland",
          description: "Across the Tasman Sea",
        },
        {
          image: "/Images/rome.webp",
          title: "Paris to Rome",
          description: "Romance and History Combined",
        },
        {
          image: "/Images/dubai.webp",
          title: "Dubai to Mumbai",
          description: "Connecting Major Economic Hubs",
        },
      ],
    },
    {
      head: "Top Holidays Packages",
      images: [
        {
          image: "/Images/europe.webp",
          title: "Explore the Wonders of Europe",
          description: "Historic Cities Await You ",
        },
        {
          image: "/Images/getways.webp",
          title: "Exotic Getaways to the Caribbean",
          description: "Sun, Sand, and Serenity ",
        },
        {
          image: "/Images/adventure.webp",
          title: "Adventure Awaits in Southeast Asia ",
          description: "Thrill and Exploration Combined",
        },
        {
          image: "/Images/maldives.webp",
          title: "Serene Escapes to the Maldives",
          description: "Luxury and Tranquility Redefined",
        },
        {
          image: "/Images/america2.webp",
          title: "Cultural Immersion in South America",
          description: "Tradition Meets Adventure",
        },
      ],
    },
    {
      head: "Top Hotel Facilities",
      images: [
        {
          image: "/Images/car1.webp",
          title: "Luxury Comfort",
          description: "Premium Seating and Services",
        },
        {
          image: "/Images/24.webp",
          title: "24/7 Availability",
          description: "Always-On Reliable Transportation",
        },
        {
          image: "/Images/wifi.webp",
          title: "Free Wi-Fi Access",
          description: "Seamless Internet Connectivity Onboard",
        },
        {
          image: "/Images/safety-first.webp",
          title: "Safety First",
          description: "Advanced Safety and Security",
        },
        {
          image: "/Images/businesswoman.webp",
          title: "Personalized Service",
          description: "Tailored to Your Preferences",
        },
      ],
    },
  ];

  const attractions = [
    {
      name: "Jaipur",
      icon: "🏰",
      isNew: true,
      link: "/FamousPlaces/InnerLakshadweep",
    },
    { name: "Bali", icon: "🏝️", link: "/FamousPlaces/Bali" },
    { name: "Goa ", icon: "🏖️", link: "/FamousPlaces/Andaman" },
    { name: "Australia ", icon: "🦘", link: "/FamousPlaces/Kashmir" },
    { name: "Dubai", icon: "🏢", link: "/FamousPlaces/Dubai" },
    { name: "Paris", icon: "🗼", link: "/FamousPlaces/Jaipur" },
    { name: "Kashmir", icon: "🏔️", link: "/FamousPlaces/Bengaluru" },
    { name: "Singapore", icon: "🛳️", link: "/FamousPlaces/Singapore" },
    { name: "Leh", icon: "🏯", link: "/FamousPlaces/Leh" },
    
 
    { name: "Thar", icon: "🏜️", link: "/FamousPlaces/Kerala" },
  ];

  return (
    <>
      <div>
        <main className="flight pt-0 lg:pt-10 px-0 md:px-10  lg:px-40">
          <div className="">
            <div className="relative ">
              <div className="relative text-lg md:text-xl lg:text-3xl font-bold text-gray-900 flex justify-center items-center gap-2  mb-5 lg:mb-6">
                Popular  Flight Destination

              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3  xl:px-5 pb-5 justify-center ">
            {cityData.map((city, index) => (
              <div
                className="bg-white border shadow-md my-5 lg:my-0  mx-auto lg:mx-2 rounded-xl overflow-hidden relative  w-[95%] xl:w-[400px]"
                key={index}
              >
                <div className="city-head bg-[#0291d2] text-center">
                  <h4 className="text-white text-lg font-semibold py-3">
                    {city.head}
                  </h4>
                </div>
                <div className=" ">
                  {city.images.map((imageData, i) => (
                    <div
                      className="items-center border-b px-4 flex hover:shadow-lg"
                      key={i}
                    >
                      <div className="city-image">
                        <img
                          src={imageData.image}
                          alt={imageData.title}
                          className="rounded-full h-9 object-cover w-9"
                        />
                      </div>
                      <div className="px-4 w-[80%]">
                        <h3 className="text-sm font-semibold mb-0 mt-4 ">
                          {imageData.title}
                        </h3>
                        <p className="text-[#525252] text-xs font-normal mb-5 pt-1">
                          {imageData.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <InfoSection />

      <div className="w-full mx-auto px-6 md:md:px-10 lg:px-52  pt:0 lg:pt-12 z-[-1]">
        <div className="relative text-lg md:text-xl lg:text:3xl font-bold text-gray-900 flex justify-center items-center gap-2 mb-14">
         Tourist ❤  Love
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-16">
          {attractions.map((attraction, index) => (
            <Link
              href={attraction.link}
              key={index}
              className="text-center rounded-lg"
            >
              <div className="relative inline-block">
                <span className="text-3xl md:text-5xl lg:text-6xl rounded-full bg-[#ECF5FE] py-[18px] px-[14px]">
                  {attraction.icon}
                </span>
                {attraction.isNew && (
                  <span className="absolute top-0 right-4 transform translate-x-1/2 -translate-y-1/2 bg-[#2196F3] text-white text-xs px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
              </div>
              <h2 className="text-xs md:text-sm lg:text-lg font-semibold text-gray-700 mt-10 hover:text-[#2196F3]">
                {attraction.name}
              </h2>
            </Link>
          ))}
        </div>

        <div className="view_btn my-10 flex justify-center">
          <Link
            href="/FamousPlaces/Cities"
            className="bg-[#2196F3] text-white py-2 px-4 rounded-full"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 p-5 lg:p-20 mt-12">
        <div className=" flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <div className="">
            <div className="p-4">
              <h3 className="text-4xl font-normal">
                What service do you need? <br />
              </h3>
              <p className="mt-4 mb-6">
                Tell us more about your requirements so that we can connect you
                to the right service provider.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <img
                    src="/Images/blog2.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">
                      Tell us more about your requirements
                    </h5>
                    <p className="mt-2">
                      HI Imagine you have made your presence online through a
                      local online directory, but your competitors have..
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <img
                    src="/Images/shield.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">
                      We connect with right service provider
                    </h5>
                    <p className="mt-2">
                      Advertising your business to area specific has many
                      advantages. For local businessmen, it is an opportunity..
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <img
                    src="/Images/general.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">
                      Happy with our service
                    </h5>
                    <p className="mt-2">
                      Your local business too needs brand management and image
                      making. As you know the local market..
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 my-5 lg:my-0">
            <img
              src="/Images/online-booking.webp"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFlight;
