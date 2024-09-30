"use client";
import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <>
    
    <section className="relative blog-bg w-full mt-5 bg-no-repeat bg-cover text-white py-20">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
       
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">Blog</h1>
          <p className="text-lg text-white">
            We are passionate about delivering exceptional value and creating
            memorable experiences.
          </p>
         
        </div>
      </section>
      <div className="min-h-screen bg-gray-100 p-6">
        <header className="text-center mb-12 max-w-4xl mt-5 mx-auto">
          <h1 className="text-xl md:text-4xl font-bold mb-4">Welcome to Apka Trip</h1>
          <p className="text-justify text-lg text-gray-700">
            Your ultimate resource for travel inspiration, tips, and stories. Whether you're looking for destination guides, practical advice, or real-life travel experiences, our blog has something for every traveller.
          </p>
        </header>

        <section className="mb-12 px-0 md:px-20">
          <h2 className="text-3xl text-center font-semibold text-black mb-6">Blog Categories</h2>
          <div className="flex flex-wrap gap-6 justify-center"> 
            <div className="bg-white  w-full md:w-[32%]   shadow-md">
            <Image src="/Images/traveltips.webp" width={100} height={100} alt="" className="w-full"/>
            <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800">Travel Tips</h3>
              <p className="text-gray-600 mt-2">Essential advice for making your journey smooth and enjoyable.</p>
              <p className="text-blue-600 text-sm mt-2">Example: "10 Packing Tips for Stress-Free Travel"</p>
            </div>
            </div>
            <div className="bg-white  w-full md:w-[32%]   shadow-md">
            <Image src="/Images/destinationguides.webp" width={100} height={100} alt="" className="w-full"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">Destination Guides</h3>
              <p className="text-gray-600 mt-2">In-depth guides to help you explore the best attractions, activities, and experiences.</p>
              <p className="text-blue-600 text-sm mt-2">Example: "Discovering Tokyo: A Complete Travel Guide"</p>
            </div>
            </div>
            <div className="bg-white  w-full md:w-[32%]   shadow-md">
            <Image src="/Images/customerstories.webp" width={100} height={100} alt="" className="w-full"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">Customer Stories</h3>
              <p className="text-gray-600 mt-2">Real-life travel stories and testimonials from our satisfied customers.</p>
              <p className="text-blue-600 text-sm mt-2">Example: "My Unforgettable Safari Adventure in Kenya"</p>
            </div>
            </div>
            <div className="bg-white  w-full md:w-[32%]   shadow-md">
            <Image src="/Images/culturalInsights.webp" width={100} height={100} alt="" className="w-full"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">Cultural Insights</h3>
              <p className="text-gray-600 mt-2">Articles exploring the unique cultures, traditions, and lifestyles of different destinations.</p>
              <p className="text-blue-600 text-sm mt-2">Example: "Exploring the Rich Culture of Bali"</p>
            </div>
            </div>
            <div className="bg-white  w-full md:w-[32%]   shadow-md">
            <Image src="/Images/hot-news.webp" width={100} height={100} alt="" className="w-full"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">Travel News and Updates</h3>
              <p className="text-gray-600 mt-2">The latest news, trends, and updates in the travel industry.</p>
              <p className="text-blue-600 text-sm mt-2">Example: "Top Travel Trends for 2024"</p>
            </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          
          <h2 className="text-3xl text-center font-semibold text-black mb-6">Customer Stories</h2>
          <div className="flex flex-wrap gap-6 justify-center">
          <div className="bg-white w-full md:w-[32%]  shadow-md">
             <Image src="/Images/africa.webp" width={100} height={100} alt="" className="w-full"/>
             <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">My Journey Through the Heart of Africa</h3>
              <p className="text-gray-600">A detailed account of a customer’s unforgettable safari experience. Includes highlights of the trip, memorable encounters with wildlife, and personal reflections.</p>
            </div>
            </div>
            <div className="bg-white w-full md:w-[32%] shadow-md">
            <Image src="/Images/mochhu.webp" width={100} height={100} alt="" className="w-full"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Exploring the Wonders of Machu Picchu</h3>
              <p className="text-gray-600">A customer's story of trekking to Machu Picchu and discovering the ancient Incan ruins. Insightful tips and emotional moments from the journey.</p>
            </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl text-center font-semibold text-black mb-6">Cultural Insights</h2>
          <div className="flex flex-wrap gap-6 justify-center">
              <div className="bg-white w-full md:w-[32%] shadow-md">
            <Image src="/Images/guide.webp" width={100} height={100} alt="" className="w-full"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Understanding Japanese Etiquette: A Traveler's Guide</h3>
              <p className="text-gray-600">Essential tips on Japanese customs and etiquette to help you navigate the cultural landscape respectfully. Includes do's and don'ts, dining etiquette, and communication tips.</p>
            </div>
            </div>
              <div className="bg-white w-full md:w-[32%] shadow-md">
            <Image src="/Images/lamp.webp" width={100} height={100} alt="" className="w-full"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Festivals Around the World: A Guide to Celebrations and Traditions</h3>
              <p className="text-gray-600">Explore unique festivals from various cultures, including what to expect and how to participate. Highlights of famous festivals like Diwali, Carnival, and Oktoberfest.</p>
            </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl text-center font-semibold text-black mb-6">Travel News and Updates</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="bg-white w-full md:w-[32%] shadow-md">
            <Image src="/Images/travelrestriction.webp" width={100} height={100} alt="" className="w-full"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Travel Restrictions and Updates: What You Need to Know for 2024</h3>
              <p className="text-gray-600">The latest information on travel restrictions, safety protocols, and entry requirements. Includes tips on how to stay informed and prepared for changes.</p>
            </div>
            </div>
            <div className="bg-white w-full md:w-[32%] shadow-md">
            <Image src="/Images/travel-news.webp" width={100} height={100} alt="" className="w-full"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Innovations in Travel: How Technology is Shaping the Future of Tourism</h3>
              <p className="text-gray-600">Insight into the latest technological advancements in the travel industry. Features on apps, gadgets, and services that enhance the travel experience.</p>
            </div>
          </div>
          </div>
        </section>

        
     

       

      </div>

   
   



    </>
  );
}
