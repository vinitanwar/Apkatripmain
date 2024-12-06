import React from "react";

// Array to hold steps data
const stepsData = [
  {
    number: "01",
    description:
      "Read the terms and conditions shared with you on email along with your policy details.",
  },
  {
    number: "02",
    description:
      "To initiate the claim process, reach out to Tata AIG support team on 1800-266-7780 or customersupport@tataaig.com",
  },
  {
    number: "03",
    description:
      "Complete documentation process initiated by Tata AIG. The claimed amount will be reimbursed directly to you.",
  },
  {
    number: "04",
    description:
      "Once approved by insurer, Once approved by insurer the claimed amount will be reimbursed directly to you.",
  },
];

const Steps = () => {
  return (
    <section className="bg-slate-50 py-10 px-6 lg:px-12">
      {/* Section Title */}
      <div className="mb-8 px-4">
        <h2 className="text-xl md:text-3xl font-bold text-slate-800 text-left">
          Claim Your Insurance in <br /><span className="text-[#331c29] mt-4">Quick 4 Steps.</span>
        </h2>
      </div>

      {/* Steps Section */}
      <div className="flex items-center justify-center flex-wrap xl:flex-nowrap  gap-6 xl:gap-12 m-4">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-full overflow-hidden"
          >
            {/* Step Number */}
            <div className="text-blue-700 text-4xl font-bold mb-4">{step.number}</div>
            {/* Step Description */}
            <p className="text-gray-700 text-center">{step.description}</p>

            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
