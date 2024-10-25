"use client";
import React from "react";

const features = [
  {
    title: "Easy Booking",
    description:
      "Our user-friendly platform simplifies the process of reserving flights, hotels, bus tickets, and holiday packages. ",
    icon: "✈️", 
    count: "1"
  },
  {
    title: "Lowest Price",
    description:
      "Our advanced search technology compares a wide range of options to ensure you get the best deals available. ",
    icon: "💰", 
    count: "2"
  },
  {
    title: "Exciting Deals",
    description:
      "From exclusive discounts on flights and hotels to special offers on bus services and holiday packages, our platform is designed to help you ",
    icon: "🔥", 
    count: "3"
  },
  {
    title: "24/7 Support",
    description:
      " Our dedicated team is available 24/7 to assist you with any questions or concerns you may have throughout your travel journey. ",
    icon: "📞", 
    count: "4"
  },
];

const Book = () => {
  return (
    <>
      <div className="py-5 lg:py-12 bg-white mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-lg md:text-xl lg:text-3xl font-bold text-gray-900 flex justify-center items-center gap-2 mb-10">
          Why book with us?
           
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 border border-blue-200 text-center card-hero"
              ><span>{feature.count}</span>
                <div className="text-4xl mt-7 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="mt-5 px-5 md:px-10 lg:px-40 text-center bg-gray-100">
          <div className="relative text-lg md:text-xl lg:text-3xl font-bold text-gray-900 flex justify-center items-center gap-2 mb-10 pt-[50px]">
            Search Flights, Hotels, Bus and Holiday Packages
          </div>
          <p className="pb-2 text-justify leading-8">
            At Apka Trip, we’re dedicated to turning your travel dreams into
            reality. Whether you're seeking affordable flights, luxurious
            hotels, reliable bus services, or exciting holiday packages, we’ve
            got you covered. Our flight search tool allows you to compare
            numerous airlines to find the best deal, ensuring a seamless booking
            experience. When it comes to accommodations, we offer a vast
            selection of hotels ranging from opulent suites to budget-friendly
            options, complete with guest reviews and exclusive deals. For
            convenient and comfortable bus travel, our platform connects you
            with reliable services that cater to both city commutes and
            long-distance journeys. And for those looking to explore new
            destinations, our holiday packages offer a variety of options, from
            relaxing beach escapes to adventurous mountain retreats. With Apka
            Trip, every aspect of your journey is taken care of, so you can
            focus on enjoying your travels.
          </p>
        </div>
      </section>
    </>
  );
};

export default Book;
