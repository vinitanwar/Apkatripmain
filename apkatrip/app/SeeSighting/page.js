"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [data, setData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [activeTab, setActiveTab] = useState("Overview");
  const [isExpanded, setIsExpanded] = useState(false);

  const tabs = ["Overview", "Amenities", "Policies", "What's included"];

  const formatCurrency = (value, code) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: code,
    }).format(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = {
        ResponseStatus: 1,
        SightseeingSearchResult: {
          CityName: "Mumbai",
          CountryCode: "IN",
          FromDate: "2024-12-11T00:00:00",
          ToDate: "2024-12-11T00:00:00",
          SightseeingName: "Discover Juhu Beach - Private Tour",
          DurationDescription: [
            { TotalDuration: "1 DAYS", Date: "2024-12-11T00:00:00" },
          ],
          ImageList: [
            "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg",
          ],
          TourPlan: [
            {
              Confirmation: "Confirmed",
              TourLanguages: ["English"],
              Price: {
                CurrencyCode: "INR",
                OfferedPrice: 6871.57,
                PublishedPrice: 9162.09,
              },
              SightseeingCancellationPolicy: [
                {
                  Charge: 9620,
                  ChargeType: 1,
                  Currency: "INR",
                  FromDate: "2024-12-08T00:00:00",
                  ToDate: "2024-12-04T00:00:00",
                },
              ],
            },
          ],
          TourDescription: `
            Rub shoulders with Bollywood superstars at the exclusive Juhu district...
            <strong>Exclusions:</strong> Drinks, Meals, Tickets.
          `,
        },
      };
      setData(response);
      setMainImage(response.SightseeingSearchResult.ImageList[0]);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    CityName,
    CountryCode,
    FromDate,
    ToDate,
    SightseeingName,
    DurationDescription,
    TourPlan,
    TourDescription,
  } = data.SightseeingSearchResult;

  const { OfferedPrice, CurrencyCode } = TourPlan[0].Price;

  const packages = [
    {
      title: "Sun Siyam Iru Fushi, Maldives",
      description: "Get ready to embark on the adventure of a lifetime!",
      tags: ["Waterfall", "Nature"],
      image: "https://via.placeholder.com/300?text=Maldives",
    },
    {
      title: "Pianemo, Raja Ampat Papua",
      description: "Get ready to embark on the adventure of a lifetime!",
      tags: ["Mountain", "Adventure"],
      image: "https://via.placeholder.com/300?text=Raja+Ampat",
    },
    {
      title: "Kelingking Beach, Nusa Dua Bali",
      description: "Get ready to embark on the adventure of a lifetime!",
      tags: ["Beach", "Sea"],
      image: "https://via.placeholder.com/300?text=Bali",
    },
  ];

  return (
    <div className="min-h-screen max-w-[1540px] mx-auto">
      <div className="mx-auto bg-white rounded-lg overflow-hidden w-full px-8">
        <div className="p-6 border-b">
          <h1 className="text-3xl font-semibold text-gray-700 mb-2">
            {SightseeingName}
          </h1>
          <p className="text-sm text-gray-600">
            {CityName}, {CountryCode} | {FromDate.split("T")[0]} -{" "}
            {ToDate.split("T")[0]}
          </p>
        </div>

        <div className="flex mx-auto">
          <img
            src={mainImage}
            alt={SightseeingName}
            className="w-full h-[32rem] object-cover rounded-[1.5rem]"
          />
        </div>

        <div className="w-full mx-auto p-6 space-y-10 flex">
          <div className="flex flex-col w-[65%]">
            <div className="flex space-x-8 border-b pb-2 text-gray-600">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm ${
                    activeTab === tab
                      ? "font-semibold text-black border-b-2 border-black"
                      : "hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "Overview" && (
              <>
                <div>
                  <h2 className="text-xl font-bold mb-4">
                    About The Destination
                  </h2>
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: isExpanded
                        ? TourDescription
                        : TourDescription.slice(0, 200) + "...",
                    }}
                  ></p>
                  <span
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Duration and Dates</h2>
                  <ul>
                    {DurationDescription.map((item, index) => (
                      <li key={index} className="text-gray-600">
                        {item.TotalDuration} on {item.Date.split("T")[0]}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {activeTab === "Policies" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Cancellation Policy</h2>
                {TourPlan[0].SightseeingCancellationPolicy.map((policy, i) => (
                  <p key={i} className="text-gray-700">
                    {policy.Charge} {policy.Currency}: Cancellation from{" "}
                    {policy.FromDate ? policy.FromDate.split("T")[0] : "N/A"} to{" "}
                    {policy.ToDate ? policy.ToDate.split("T")[0] : "N/A"}.
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="w-[30%] mx-auto p-6 bg-white shadow-lg rounded-md border">
            <div className="text-2xl font-bold">
              $750.00 <span className="text-sm font-normal">per night</span>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                Check In
              </label>
              <input
                type="date"
                className="w-full mt-1 p-2 border rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue="2024-08-02"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Check Out
              </label>
              <input
                type="date"
                className="w-full mt-1 p-2 border rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue="2024-08-05"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Guest
              </label>
              <select className="w-auto mt-1 p-2 border rounded-md shadow-sm focus:ring-black focus:border-black">
                <option>Add Guest</option>
                <option>1 Guest</option>
                <option>2 Guests</option>
              </select>
            </div>

            <div className="mt-6 text-lg font-bold">
              Total: <span>$2,250.00</span>
            </div>

            <button className="w-full mt-6 p-3 bg-black text-white text-center rounded-md hover:bg-gray-800 transition">
              Book Now
            </button>

            <button className="w-full mt-4 text-center text-sm text-gray-500 hover:underline">
              Ask manager a Question
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start p-4 w-screen">
          <h2 className="text-3xl font-semibold mb-4">Location</h2>
          <div className="relative w-full h-64 bg-gray-200 rounded-md overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2118.8653849516486!2d76.78440877092395!3d30.749943072624916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed76ab9f14c1%3A0xd6362b158b8994aa!2sEiffel%20Tower%20Replica!5e0!3m2!1sen!2sin!4v1733123258040!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              <div className="w-6 h-6 bg-black rounded-full flex justify-center items-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Choose our range of expertly crafted packages
          </h2>
          <p className="text-gray-600">
            Get ready to embark on the adventure of a lifetime! Our curated list
            of top travel destinations promises breathtaking landscapes, vibrant
            cultures.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex gap-2">
                  {pkg.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
