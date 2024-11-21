import React from "react";
import CustomSlider from "../Component/AllComponent/Slider";
import Link from "next/link";
import {
  FaEye,
  FaRegStar,
  FaShip,
  FaRegCircle,
  FaCreditCard,
  FaSpa,
  FaMapMarkedAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { url } from "inspector";

const page = () => {
  const whyBook = [
    {
      heading: "Unparalleled Scenic Views",
      description:
        "Cruises offer breathtaking views of the sea, stunning coastlines, and picturesque sunsets that no other mode of travel can match.",
      icon: <FaEye />,
    },
    {
      heading: "All-Inclusive Luxury",
      description:
        "Enjoy luxurious accommodations, gourmet dining, entertainment, and activities all included in one package.",
      icon: <FaRegStar />,
    },
    {
      heading: "Multiple Destinations in One Trip",
      description:
        "Visit multiple cities or countries without the hassle of packing and unpacking at every stop.",
      icon: <FaShip />,
    },
    {
      heading: "Family-Friendly Activities",
      description:
        "Cruises cater to all ages with kids’ clubs, pools, and entertainment, making them ideal for family vacations.",
      icon: <FaRegCircle />,
    },
    {
      heading: "Affordable Packages and Discounts",
      description:
        "Take advantage of promotions and early-bird discounts to make your cruise vacation budget-friendly.",
      icon: <FaCreditCard />,
    },
    {
      heading: "Relaxation and Wellness",
      description:
        "Unwind with spa treatments, fitness classes, and serene ocean views to rejuvenate your mind and body.",
      icon: <FaSpa />,
    },
    {
      heading: "Cultural and Shore Excursions",
      description:
        "Experience diverse cultures through guided shore excursions at various ports of call.",
      icon: <FaMapMarkedAlt />,
    },
    {
      heading: "Flexible Booking Options",
      description:
        "Cruises offer a variety of itineraries and durations to fit your schedule and preferences.",
      icon: <FaCalendarAlt />,
    },
  ];
  const journeyItems = [
    {
      bgPath: "/Images/cruise.webp",
      href: "/trainSearch",
      imgSrc: "/Images/america.webp",
      alt: "UK Cruise",
      title: "UK Cruise",
    },
    {
      bgPath: "/Images/cruise2.webp",

      href: "/trainSearch",
      imgSrc: "/Images/1ny6u12000djzth5m52EE.webp",
      alt: "Europe Cruise",
      title: "Europe Cruise",
    },
    {
      bgPath: "/Images/cruise3.webp",

      href: "/Cruiseearch",
      imgSrc: "/Images/1ny7412000djztnftC466.webp",
      alt: "Italy Cruise",
      title: "Italy Cruise",
    },
    {
      bgPath: "/Images/cruise4.webp",

      href: "/Cruiseearch",
      imgSrc: "/Images/1ny1a12000djzrp2n9533.webp",
      alt: "Spain Cruise",
      title: "Spain Cruise",
    },
    {
      bgPath: "/Images/cruise5.webp",
      href: "/Cruiseearch",
      imgSrc: "/Images/1ny4r12000djzsdm4E7EC.webp",
      alt: "China Cruise",
      title: "China Cruise",
    },
    {
      bgPath: "/Images/cruise6.webp",
      href: "/Cruiseearch",
      imgSrc: "/Images/1ny1j12000djzt1tu1655.webp",
      alt: "South Korea Cruise",
      title: "South Korea Cruise",
    },
  ];

  const cruiseData = [
    {
      id: 1,
      title: "Caribbean Escape",
      description:
        "Discover the pristine beaches and vibrant culture of the Caribbean islands. Immerse yourself in turquoise waters and white sandy beaches, while enjoying vibrant nightlife and exciting excursions. Explore exotic destinations like Jamaica, the Bahamas, and Puerto Rico. Indulge in luxury onboard, with world-class dining, entertainment, and wellness treatments, all while sailing through some of the most beautiful coastlines on earth.",
    },
    {
      id: 2,
      title: "Mediterranean Odyssey",
      description:
        "Sail through iconic cities along the Mediterranean coast, from Greece to Italy. Uncover ancient ruins in Athens, relax on the Amalfi Coast, or discover the romantic streets of Venice. This journey combines rich history, stunning landscapes, and world-class cuisine. Enjoy Mediterranean specialties and fine wines while exploring charming coastal towns and beautiful islands such as Santorini and Capri. A perfect mix of culture, adventure, and relaxation awaits.",
    },
    {
      id: 3,
      title: "Alaskan Adventure",
      description:
        "Experience breathtaking glaciers, towering mountains, and wildlife on an unforgettable Alaskan cruise. Sail through the icy waters of the Inside Passage, witness majestic glaciers calving into the sea, and encounter wildlife such as humpback whales, bald eagles, and brown bears. Onshore, explore the rugged beauty of Denali National Park, visit charming fishing villages, and learn about the history and culture of the Last Frontier. This is the ultimate adventure for nature lovers and thrill-seekers alike.",
    },
    {
      id: 4,
      title: "Asian Expedition",
      description:
        "Explore the rich culture and scenic beauty of Southeast Asia aboard our luxury ship. From the vibrant cities of Singapore and Hong Kong to the ancient temples of Thailand and Vietnam, this cruise offers a perfect blend of modernity and tradition. Visit bustling markets, indulge in authentic cuisine, and experience diverse cultures. Cruise through tropical archipelagos, discover breathtaking landscapes, and unwind with luxurious spa treatments and local performances on board. An unforgettable adventure for explorers seeking to immerse themselves in Asia’s diverse charm.",
    },
    {
      id: 5,
      title: "South Pacific Paradise",
      description:
        "Embark on a journey through the idyllic islands of the South Pacific. From the stunning beaches of Bora Bora to the lush landscapes of Fiji, this cruise takes you to some of the most exotic destinations in the world. Enjoy pristine waters perfect for snorkeling and diving, visit vibrant Polynesian villages, and relax on some of the world’s most beautiful beaches. Indulge in a relaxing spa day or take part in thrilling water activities, all while cruising aboard a luxurious ship with unparalleled service and stunning ocean views.",
    },
    {
      id: 6,
      title: "Transatlantic Crossing",
      description:
        "Set sail on a historic journey across the Atlantic Ocean, traveling between the charming shores of Europe and the vibrant cities of the Americas. Experience classic ocean cruising with luxurious amenities, exceptional service, and leisurely days at sea. Visit iconic ports such as Southampton, New York City, and Lisbon, and enjoy scenic coastal views along the way. Perfect for those who enjoy the serenity of the open ocean, along with port stops rich in culture and history.",
    },
  ];

  return (
    <div className="">
      <div className="bg-[url(/Images/CruiseBanner.webp)] relative bg-center bg-cover text-white  px-5 lg:px-20 py-5 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-0"></div>
        <div className="flex relative z-10 flex-col xl:flex-row justify-between items-center space-y-8 xl:space-y-0 md:space-x-8 px-6 lg:px-12 py-10 ">
          {/* Left Content Section */}
          <div className="w-full text-center xl:text-left xl:w-[75%] px-4 md:px-8 lg:px-16">
  <div className="space-y-8 md:space-y-12">
    {/* Heading */}
    <h5 className="font-extrabold lg:leading-tight text-3xl md:text-4xl lg:text-5xl text-white ">
      Travel in Style Luxury Cruise for Every Explorer
    </h5>

    {/* Paragraph */}
    <p className="text-base lg:text-lg text-white leading-relaxed md:leading-loose">
      Experience the allure of travel like never before with our luxury train journeys. Whether you’re gliding through the majestic Swiss Alps, marveling at the rugged beauty of the Australian outback, or exploring the vibrant cities of India, our trains offer an unparalleled blend of elegance, comfort, and adventure. Enjoy gourmet dining, panoramic views, and world-class service as you traverse iconic landscapes. From historic routes steeped in tradition to modern marvels of engineering, our luxury trains promise a journey where every moment is as captivating as the destination. Rediscover the romance of rail travel and create memories to treasure for a lifetime.
    </p>

    {/* Image */}
    <div className="flex justify-center md:justify-start">
      <img
        src="/Images/cruiseMove.webp"
        alt="Luxury Cruise"
        className="cruiseMove w-16 h-16 "
      />
    </div>
  </div>
</div>


          {/* Right Form Section */}
          <form className="text-black max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            {/* Form Heading */}
            <h2 className="text-2xl font-bold text-center text-[#42A6EF] mb-6">
              Book Your Cruise
            </h2>

            {/* Name Field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="text"
                id="name"
                placeholder="Enter your full name"
                aria-label="Name"
                required
              />
              <p className="text-sm text-red-500 mt-1 hidden">
                Please enter your name
              </p>
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="email"
                id="email"
                placeholder="Enter your email address"
                aria-label="Email"
                required
              />
              <p className="text-sm text-red-500 mt-1 hidden">
                Please enter a valid email
              </p>
            </div>

            {/* Pickup and Drop Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="pickup"
                >
                  Pickup Destination
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  id="pickup"
                  placeholder="E.g., New York, NY"
                  aria-label="Pickup Destination"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="drop"
                >
                  Drop Destination
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  id="drop"
                  placeholder="E.g., Boston, MA"
                  aria-label="Drop Destination"
                  required
                />
              </div>
            </div>

            {/* Booking Date and Time */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="booking-date"
                >
                  Booking Date
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="date"
                  id="booking-date"
                  aria-label="Booking Date"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="booking-time"
                >
                  Booking Time
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="time"
                  id="booking-time"
                  aria-label="Booking Time"
                  required
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="message"
              >
                Additional Notes
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                id="message"
                rows="4"
                placeholder="Let us know any specific requests or preferences"
                aria-label="Additional Notes"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-[#42A6EF] hover:bg-[#398cc8] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                aria-label="Submit Inquiry"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="px-5 lg:px-20  space-y-16">
        <CustomSlider />
        <div className="space-y-10">
          <h6 className="text-center text-2xl font-bold">
            "Why Book Your Cruise with Apka Trip?"
          </h6>
          <div className="flex flex-wrap gap-16 justify-center">
            {whyBook.map((item, index) => (
              <div
                key={index}
                className="flex shadow-lg hover:scale-105 text-center gap-2 border px-3 rounded-lg py-2 flex-col w-[350px] items-center mb-4"
              >
                <div className="mr-3 text-[#3181ED] text-3xl">{item.icon}</div>
                <div className="space-y-2">
                  <h3 className="font-bold">{item.heading}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="startHere ">
          <div className="text-center xl:w-[70%] mx-auto space-y-5">
            <h6 className="text-xl font-semibold">
              Start Your Next Cruise Exploration Heree
            </h6>
            <p>
              Plan your next cruise with our expert guide to affordable trips
              across Europe, Asia, the Mediterranean, and the Caribbean,
              providing the best options for an unforgettable cruise adventure.
            </p>
          </div>
          <div className="journey-body mt-5 rounded-t-lg">
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 rounded-b-lg p-5">
              {journeyItems.map((item, index) => (
                <div
                  key={index}
                  className="h-[200px] relative bg-center bg-no-repeat  bg-cover"
                  style={{ backgroundImage: `url(${item.bgPath})` }}
                >
                  <div className="shadow-lg bg-gray-200 px-5 absolute bottom-0  py-2 w-full flex justify-between items-center">
                    <div className="flex items-center gap-5">
                      <img
                        src={item.imgSrc}
                        alt={item.alt}
                        className="w-16 h-16 object-cover rounded-full"
                        loading="lazy"
                      />
                      <h3 className="text-lg font-semibold ">{item.title}</h3>
                    </div>
                    <div>
                      <IoMdArrowDropright className="text-5xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="details space-y-5 py-10 ">
          <div className="text-center">
            <h2 className="text-2xl  font-extrabold leading-tight ">
              Cruise Adventures for Every Explorer
            </h2>
            <p>
              Embark on a cruise journey like no other. From tropical islands to
              majestic glaciers, our luxury cruises offer something for every
              type of traveler.
            </p>
          </div>
          <div className="space-y-5">
            {cruiseData.map((curElm, index) => {
              return (
                <div
                  key={index}
                  className="shadow-lg px-5 py-3 rounded-lg space-y-5"
                >
                  <h5 className="text-2xl font-bold">{curElm.title}</h5>
                  <p>{curElm.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
