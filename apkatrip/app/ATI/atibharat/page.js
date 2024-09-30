"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

import { FaArrowLeftLong } from "react-icons/fa6";

export default function page() {
  const explore = [
    {
      exploreImage: "/Images/desert.avif",
      placeName: "Royal Rajasthan",
    },
    {
      exploreImage: "/Images/temple.jpg",
      placeName: "Golden Temple",
    },
    {
      exploreImage: "/Images/desert.avif",
      placeName: "Royal Rajasthan",
    },
    {
      exploreImage: "/Images/desert.avif",
      placeName: "Royal Rajasthan",
    },
    {
      exploreImage: "/Images/desert.avif",
      placeName: "Royal Rajasthan",
    },
    {
      exploreImage: "/Images/desert.avif",
      placeName: "Royal Rajasthan",
    },
    {
      exploreImage: "/Images/desert.avif",
      placeName: "Royal Rajasthan",
    },
    {
      exploreImage: "/Images/desert.avif",
      placeName: "Royal Rajasthan",
    },
  ];

  return (
    <div className="exploreBharat">
      <div className="Banner-Image px-4 md:px-20 lg:px-40 relative bg-[url('/Images/exploreIndia.jpg')] bg-cover bg-center   min-h-[80vh] md:min-h-[100vh] flex justify-center items-center">
        <div className="content relative z-10 text-center text-white">
          <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-widest font-bold">
            WELCOME TO
          </h3>
          <h2 className="text-6xl md:text-7xl xl:text-9xl text-white uppercase font-extrabold">
            Bharat
          </h2>
          <p className="px-4 md:px-20 xl:px-60 mt-4 text-sm md:text-base lg:text-lg">
            Bharat, known globally as India, is a land of rich cultural
            heritage, diverse landscapes, and deep-rooted traditions. With a
            history spanning thousands of years, Bharat is home to ancient
            civilizations, spiritual teachings, and remarkable achievements in
            art, science, and philosophy, offering a vibrant tapestry of unity
            in diversity.
          </p>
        </div>
      </div>

      <div className="cardss-Section   xl:px-20 mt-5 md:mt-0 pt-10  px-2">
        <div className="grid items-center  grid-cols-1 xl:grid-cols-2  gap-6 lg:gap-10 px-2 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 xl:block lg:space-y-10">
            <div className="md:flex items-center xl:block">
              <h3 className="text-xl text-center md:text-start md:text-3xl lg:text-4xl ps-2 font-extrabold   lg:leading-snug">
                Immerse Yourself in the Mesmerizing Wonders of{" "}
                <span className="text-[#C09552]">India</span>
              </h3>

              
              <div className="xl:hidden rounded-3xl  lg:px-10 py-5">
                <img
                  src="/Images/indiamap.jpg"
                  alt="Map of India"
                  className="w-full md:w-[40vw] h-auto rounded-3xl"
                />
              </div>
            </div>

          
            <div className="bg-[#FFF6E8] shadow-lg text-sm md:text-base lg:text-lg space-y-3 md:space-y-4 font-normal px-4 md:px-5 py-3 rounded-lg">
              <p>
                India, a land steeped in rich history and vibrant culture,
                offers a treasure trove of experiences waiting to be explored.
                From the majestic Himalayas to the serene backwaters of Kerala,
                each region showcases its unique beauty and charm. Whether India
                reveals a story.
              </p>
              <p>
                As you embark on your journey through this incredible country,
                prepare to uncover hidden gems that are often overshadowed by
                popular destinations. Discover the lesser-known towns, each with
                its own distinctive allure, where time seems to. From the
                intricate craftsmanship of artisans to the breathtaking
                landscapes that stretch across the horizon, India invites you to
                experience its treasures firsthand.
              </p>
            </div>
          </div>

       
          <div className="hidden xl:flex justify-center rounded-3xl px-4 lg:px-10 py-5">
            <img
              src="/Images/indiamap.jpg"
              alt="Map of India"
              className="w-[80%] h-auto rounded-full"
            />
          </div>
        </div>

        <div className="space-y-4 lg:space-y-10 explore px-2 lg:px-20 xl:px-20 ">
          <div className="discover pt-5 lg:pt-10">
            <h3 className="text-2xl text-center lg:text-start md:text-3xl ps-2 font-extrabold  lg:leading-relaxed font-serif">
              Find Your Dream Adventure in {""}
              <span className="text-[#C09552]">India</span>{" "}
            </h3>
          </div>
          <div className="cardParent grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
            {explore.map((elm) => (
              <div className="h-64 w-full lg:w-64 relative">
                <img
                  src={elm.exploreImage}
                  alt=""
                  className="h-full w-full lg:w-auto rounded-3xl object-cover"
                />
                <div className="absolute bottom-3 w-full right-6">
                  <h5 className="text-xl  text-center font-bold   text-white w-full">
                    {elm.placeName}{" "}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="india unveiled py-10 px-3 lg:px-10 xl:px-20">
          <h3 className="text-2xl text-center lg:text-start md:text-3xl ps-2 font-extrabold  lg:leading-relaxed font-serif">
            India {""}
            <span className="text-[#C09552]">Rediscovered</span>{" "}
          </h3>

          <div className="swiperSection">
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper mt-5 xl:mt-10 px-4 sm:px-10 "
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1800: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
            >
              {Array(16)
                .fill(null)
                .map((_, index) => (
                  <SwiperSlide key={index} className="flex justify-center ">
                    <div className="w-72 transition-transform duration-300 hover:scale-105">
                      <div className="h-80 overflow-hidden rounded-xl shadow-lg bg-white relative group">
                        <img
                          src="/Images/young.webp"
                          alt="Young & Buzzing"
                          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-75"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-500"></div>
                      </div>

                      <div className="relative z-40 p-4 bg-white rounded-b-xl shadow-lg">
                        <h5 className="font-bold text-black text-xl mb-2">
                          Young & Buzzing
                        </h5>
                        <p className="text-sm text-gray-600">
                          Witness the thrilling vibe of India’s young and
                          buzzing places.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              <div className="swiper-button-prev custom-nav-button hidden lg:flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg  transition duration-300">
                <FaArrowLeftLong className="text-[#C09552] " />
              </div>
              <div className="swiper-button-next custom-nav-button hidden lg:flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg  transition duration-300">
                <FaArrowLeftLong className="rotate-180 text-[#C09552] " />
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="Incredible-Bharat  lg:py-10 px-3 ">
        <div className="w-full min-h-[60vh] bg-[url('/Images/desert.avif')] rounded-3xl px-5 xl:px-40 py-16 bg-no-repeat bg-cover  bg-center">
          <div className="flex flex-col gap-5 justify-center items-start">
            <h3 className="text-2xl xl:text-5xl font-extrabold font-serif text-white">
              Amazing <br />
              India Awaits
            </h3>
            <p className="text-white ">
              Here’s an expanded version of your content that adds more detail
              and excitement: Embark on an unforgettable adventure through the
              iconic UNESCO World Heritage sites, towering skyscrapers,
              breathtaking natural landscapes, and majestic palaces like the Taj
              Mahal. From the ancient temples of Khajuraho to the vibrant
              streets of Jaipur, every corner of Bharat tells a story waiting to
              be explored. Delve into the rich tapestry of cultures, where
              tradition meets modernity, and every experience is a celebration
              of diversity. Immerse yourself in the bustling markets, savor the
              delectable flavors of regional cuisines, and engage with the
              warm-hearted locals who embody the spirit of Bharat. Create
              lasting memories with our meticulously crafted itineraries,
              designed to cater to every traveler's desire. Whether you seek
              adventure in the serene backwaters of Kerala, a spiritual journey
              in Varanasi, or a wildlife safari in the heart of Ranthambore, we
              have something for everyone. Our knowledgeable guides are ready to
              lead you through hidden gems and iconic landmarks, ensuring you
              experience the very best of this enchanting land..
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 xl:px-40 items-center">
        <div className="flex flex-col  gap-2">
          <img src="/Images/india.jpg" alt="" className="w-16 rounded-full" />
          <p>
            Introducing Explore Bharat, a pioneering travel initiative by the
            renowned online platform, Apka Trip. This unique program presents
            thoughtfully curated tour packages with tailor-made itineraries,
            carefully designed by a team of expert travel planners to offer you
            an exceptional holiday experience.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-orange-800 py-[2px] w-10"></div>
          <p>
            Indulge in unmatched luxury with world-class infrastructure,
            exceptional travel amenities, versatile transportation choices, and
            upscale accommodations, ensuring every detail of your trip reflects
            the highest standards. With each package, you’ll enjoy the services
            of a dedicated and expert personal guide, offering customized
            assistance throughout your journey, making your experience truly
            worthwhile.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-green-800 py-[2px] w-10"></div>

          <p>
            Discover unmatched luxury with a selection of world-class
            infrastructure, exceptional travel amenities, diverse transport
            options, and premium accommodations, ensuring every part of your
            journey is marked by sophistication and quality. Each package offers
            the added value of a skilled personal guide, dedicated to providing
            personalized support and enriching your travel experience from start
            to finish.
          </p>
        </div>
      </div>
    </div>
  );
}
