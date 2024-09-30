"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
  const testimonialsData = [
    {
      quote:
        "Very good and insightful training facilitated by KnowledgeHut. The instructor was on top of it and could explain the concepts lucidly.",
      name: "Dr. Anoop Kumar",
      title: "Senior Instructor, KnowledgeHut",
      avatar: "/avtar.svg",
      rating: 5,
      img1: "/Images/author.webp",
      img2: "/Images/google222.png",
    },
    {
      quote:
        "Excellent training with practical examples and real-world experience sharing. Truly beneficial for our career development.",
      name: "Ms. Priya Sharma",
      title: "Software Engineer, ABC Corp",
      avatar: "/avtar2.svg",
      rating: 5,
      img1: "/Images/author2.webp",
      img2: "/Images/google222.png",
    },
    {
      quote:
        "The sessions were engaging and informative. The live demonstrations helped in understanding the concepts better.",
      name: "Mr. Raj Patel",
      title: "Project Manager, XYZ Ltd",
      avatar: "/avtar3.svg",
      rating: 4,
      img1: "/Images/author.webp",
      img2: "/Images/google222.png",
    },
    {
      quote:
        "A wonderful learning experience with a focus on real-world applications. Highly recommended for professionals.",
      name: "Ms. Shreya Singh",
      title: "Business Analyst, DEF Ltd",
      avatar: "/avtar4.svg",
      rating: 5,
      img1: "/Images/author2.webp",
      img2: "/Images/google222.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  const travelData = [
    {
      imgSrc: "/Images/man.webp",
      altText: "Corporate",
      title: "Travel Managers",
      description: "Responsible for strategizing business travel plans",
      listItems: [
        "To ensure that the entire journey is enjoyable, bring your team members to Apka Trip.",
        "In-house tracking solutions to get regular employee details.",
        "24/7 reliable support for resolving all the queries.",
      ],
    },
    {
      imgSrc: "/Images/ticket22.webp",
      altText: "Corporate",
      title: "Travel Arranger",
      description: "Those who oversee the company's travel expenditure",
      listItems: [
        "User-friendly admin portal managing all employee travel expenses",
        "Maintains and audits accurate records of travel arrangements",
        "Create and analyse travel expense reports to optimise future tours.",
      ],
    },
    {
      imgSrc: "/Images/working-man.webp",
      altText: "Corporate",
      title: "Employees",
      description: "Those who travel to sky-rocket the business.",
      listItems: [
        "Special discounts on travel-related expenses",
        "A centralised booking system enabling easier coordination.",
        "Access to top-notch flights and luxurious hotels at negotiated prices.",
      ],
    },
  ];

  return (
    <>
      <div className="w-full bg-[url('/Images/bg-images..webp')] bg-no-repeat bg-cover px-5 md:px-32 py-16 bg-center">
        <div className="py-5">
          <h1 className="text-[#08b385] text-2xl font-semibold relative leading-2 md:leading-[70px] ">
          Corporate Travel Simplified, Empowering Business Growth
            <span className="absolute block w-[55px] h-[5px] bg-[#08b385] rounded-full top-[-15px] left-0 mx-auto"></span>
          </h1>
          <p className="text-white text-2xl md:text-3xl my-[10px]">
          The Complete Corporate Travel Solution Optimize Your Business Trip for Success Today!
          </p>
        </div>
        <div className="rounded-lg w-full ">
          <img
            src="/Images/apkatripbanner.webp"
            className="mx-auto rounded-lg"
          />
        </div>
      </div>

      <div className="mt-10 mx-5 md:mx-28">
        <p className="text-3xl font-normal font-weight-300">
          {" "}
          A Central Place for Every 
          <span className="font-bold text-[#08b385]"> Team Member</span>
        </p>
        <p className="my-4 text-xl font-semibold">
        "Each exclusive feature is carefully tailored to fulfill the unique needs of every employee."
        </p>
        <div className="flex justify-between  flex-wrap gap-4 mb-8">
          {travelData.map((item, index) => (
            <div
              key={index}
              className="p-4 w-full md:w-[32%] border border-[#08b385] border-b-4 rounded-t-3xl"
            >
              <img src={item.imgSrc} alt={item.altText} className="w-16 h-16" />

              <h5 className="text-lg font-bold mt-2 mb-1">{item.title}</h5>
              <span className="text-base font-light block mb-3">
                {item.description}
              </span>
              <ul className="list-disc pl-5 mb-4">
                {item.listItems.map((listItem, liIndex) => (
                  <li key={liIndex}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[url('/Images/deskbg..webp')] bg-no-repeat bg-cover px-5 md:px-32 py-8 md:py-20 bg-center">
        <div className="text-white mx-auto">
          <div className="text-center text-white text-3xl font-light">
          Easy, Consistent, & Smart 
            <span className="font-semibold"> Booking Process!</span>
          </div>
          <div className="text-center text-lg font-medium mt-4">
          Simply adhere to these guidelines to start your corporate adventure.
          </div>
          <div className="flex flex-wrap justify-between gap-10 md:gap-0 items-center mt-10">
            <div className="flex flex-col items-center w-full md:w-[30%] text-center">
              <div className="relative flex items-center justify-center">
                <img
                  src="/Images/add-user.webp"
                  alt="Edit Icon"
                  className="bg-[#3F4E6A] rounded-[20px] w-[158px] h-[158px] p-8 flex justify-center"
                />
                <div className="w-[34px] h-[34px]  p-[5px] bg-[#08b385] rounded-full absolute top-[-20px] left-1/2 transform -translate-x-1/2 flex justify-center shadow-[inset_0_0_4px_#08b385]">
                  01
                </div>
              </div>
              <h4 className="text-lg font-semibold mt-4">
                Create Your Account
              </h4>
              <p className="text-sm text-white font-light mt-2">
              Enter the necessary information about your business, including the number of employees.
              </p>
            </div>
            <div className="flex flex-col items-center w-full md:w-[30%] text-center text-white">
              <div className="relative flex items-center justify-center">
                <img
                  src="/Images/checkbox.webp"
                  alt="Select Icon"
                  className="bg-[#3F4E6A] rounded-[20px] w-[158px] h-[158px] p-8 flex justify-center"
                />
                <div className="w-[34px] h-[34px] p-[5px] bg-[#08b385] rounded-full absolute top-[-20px] left-1/2 transform -translate-x-1/2 flex justify-center shadow-[inset_0_0_4px_#08b385]">
                  02
                </div>
              </div>
              <h4 className="text-lg font-semibold mt-4">
                Review &amp; Set Policies
              </h4>
              <p className="text-sm font-light mt-2 text-white">
              Examine each facility and select the ones that best suit your needs.

              </p>
            </div>
            <div className="flex flex-col items-center w-full md:w-[30%] text-center">
              <div className="relative flex items-center justify-center">
                <img
                  src="/Images/discount22.webp"
                  alt="Ready Icon"
                  className="bg-[#3F4E6A] rounded-[20px] w-[158px] h-[158px] p-8 flex justify-center"
                />
                <div className="w-[34px] h-[34px]  p-[5px] bg-[#08b385] rounded-full absolute top-[-20px] left-1/2 transform -translate-x-1/2 flex justify-center shadow-[inset_0_0_4px_#08b385]">
                  03
                </div>
              </div>
              <h4 className="text-lg font-semibold mt-4">Get Set Go</h4>
              <p className="text-sm font-light mt-2 text-white">
              To ensure that the entire journey is enjoyable, bring your team members to apka trip.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 hidden">
          <Link href="#" className="bg-black text-white py-2 px-4 rounded">
            Create Now
          </Link>
        </div>
      </div>

      <section className="test-main">
        <div className="max-w-7xl mx-auto px-4 py-12 my-5 ">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base text-center mb-10">
            Outstanding experience! Great service, exceptional quality. Very
            satisfied customer.
          </p>
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="px-2 my-5">
                <div className="w-full h-80 flex flex-col justify-between border-2 border-[#dee5ec] bg-white shadow-lg rounded-lg p-6 relative group hover:border-[#08b385] hover:shadow-2xl transition-all duration-300 ease-in-out">
                  <div className="absolute top-[-20px] left-[30px] bg-white shadow-md border-2 rounded-full px-2 py-2 border-[#dee5ec] group-hover:border-[#08b385]">
                    <FaQuoteLeft className="text-sm text-gray-700 group-hover:text-[#08b385]" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-4">
                      {truncateText(testimonial.quote, 20)}
                    </h3>
                    <div className="flex text-[#08b385] text-xl mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="mx-1" />
                      ))}
                    </div>
                  </div>
                  <div className="w-full border-[1px] border-dashed my-5 border-[#bfccda]"></div>
                  <div className="w-full flex items-center">
                    <img
                      className="w-12 md:w-14 rounded-full"
                      src={testimonial.img1}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h4 className="text-base md:text-lg font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <img
                        className="w-8 md:w-10"
                        src={testimonial.img2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <div className="text-sm text-white font-semibold bg-[#011d38] text-center py-4">
        Copyright © {new Date().getFullYear()} ATIDESK. All Rights Reserved.
      </div>
    </>
  );
};

export default Page;
