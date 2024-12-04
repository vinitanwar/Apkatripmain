import React from "react";

// Array to hold project data
const projectData = [
  {
    image: '/insurance/benefit1.webp',
    category: "Medical Coverage",
    title: "Comprehensive Medical Insurance",
    description: "Get complete medical coverage including consultation, global cashless hospitalization, and evacuation during medical emergencies."
  },
  {
    image: '/insurance/benefit1.webp',
    category: "Travel Coverage",
    title: "Comprehensive Travel Protection",
    description: "Stay protected from unexpected events like lost luggage, flight delays, trip cancellations, and passport loss during your travels."
  },
  {
    image: '/insurance/benefit1.webp',
    category: "On-trip Support",
    title: "24/7 Global On-trip Assistance",
    description: "Receive 24/7 global support for any travel-related issues, including medical emergencies, hospital visits, passport replacement, and more."
  },
];

const Benefits = () => {
  return (
    <section className="bg-secondary-color p-6 lg:py-16 animate-fadeIn bg-slate-50">
      {/* Section Title */}
      <div className="mb-8 md:mb-16">
        <div className="px-4 lg:px-20">
          <div className="row">
            <div className="col-lg-8 col-xl-6">
              <h2 className="text-slate-800 text-3xl font-bold mb-2 animate-slideUp">
                What are the Benefits of Travel Insurance by ApkaTrip?
              </h2>
              <h5 className="font-bold text-md text-gray-600">
                We cover almost everything to make your travel easy and secure
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 lg:px-20">
        <div className="flex justify-between gap-10">
          {projectData.map((project, index) => (
            <div key={index} className="flex-1 ">
              <div className="mb-4">
                {/* Replace with relevant icons */}
                <img src={project.image} alt="icon" className="w-36 h-36 ml-6 object-cover rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-black">{project.category}</h3>
              <p className="text-gray-700 text-md font-semibold mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
