import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="mb-15 py-10 px-5 lg:px-20 animate__animated animate__fadeIn custom-color">
        <div className="block md:flex   items-center justify-center gap-10">
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl  text-white font-bold mb-5">
              Subscribe to Our Newsletter
            </h2>

            <form className="mx-auto  my-5 lg:my-0  flex justify-center  rounded-full relative z-20 ">
              <input
                type="email"
                placeholder="Your email address"
                className="border-0  pl-5 w-full border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="bg-[#ef6614] text-white px-10 py-5 rounded-r-md hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand"
              >
                Subscribe
              </button>
            </form>
          </div>
          <p className=" text-lg w-full lg:w-2/3 text-justify text-white font-semibold">
            Stay updated with the latest travel tips, destination guides, and
            special offers by subscribing to our newsletter. Receive regular
            updates straight to your inbox and never miss out on exciting travel
            opportunities.
            {""}{" "}
            <span className="text-brand">
              At Apka Trip, we are passionate about sharing our love for travel
              and helping you create unforgettable experiences. Dive into our
              blog and get inspired for your next adventure.
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
