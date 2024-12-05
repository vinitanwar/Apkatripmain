import React from "react";

// Array to hold project data
const projectData = [
  {
    image: '/insurance/benefit1.webp',
    category: "Medical Coverage",
    title: "Comprehensive Medical Insurance",
    description: "Covers medical emergencies, hospitalization, or medical evacuation costs while traveling, especially abroad",
  },
  {
    image: '/insurance/benefit2.webp',
    category: "Travel Coverage",
    title: "Comprehensive Travel Protection",
    description: "Reimbursement for additional expenses incurred due to significant delays, such as accommodation or meals.",
  },
  {
    image: '/insurance/benefit3.webp',
    category: "On-trip Support",
    title: "24/7 Global On-trip Assistance",
    description: "Reimbursement for non-refundable expenses if you need to cancel or cut short your trip due to unforeseen circumstances like illness, natural disasters, or other emergencies.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-slate-50 p-6 lg:py-16 animate-fadeIn">
      {/* Section Title */}
      <div className="my-4 md:my-8 text-left px-4 lg:px-10">
        <h2 className="text-slate-800 text-xl md:text-3xl font-bold mb-2 animate-slideUp">
          What are the Benefits of Travel Insurance by ApkaTrip?
        </h2>
        <h5 className="font-bold text-sm md:text-md text-gray-600">
          We cover almost everything to make your travel easy and secure
        </h5>
      </div>

      {/* Benefits Section */}
      <div className="flex flex-wrap justify-center gap-4 lg:gap-10 px-4 lg:px-12">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center  p-6 w-full sm:w-[90%] md:w-[48%] lg:w-[30%]"
          >
            {/* Image Section */}
            <img
              src={project.image}
              alt="icon"
              className="w-40 h-40 object-cover rounded-full mb-4 border-2 border-dotted border-red-500 p-2"
            />

            {/* Text Content */}
            <h3 className="text-lg font-bold text-slate-800 text-center">
              {project.category}
            </h3>
            <p className="text-gray-700 text-sm text-center mt-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
