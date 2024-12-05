import React from "react";

// Array to hold steps data
const stepsData = [
  {
    number: "01",
    description:
      "If it is a delay trip, loss, or medical emergency then promptly inform the insurance company of the problem that has arisen. ",
  },
  {
    number: "02",
    description:
      "Collect evidence from receipts to medical reports, police records etc. to authenticate your case and make its processing hassle free.",
  },
  {
    number: "03",
    description:
      " Track the status of your claim and follow it up with further details when required to prevent delays.",
  },
  {
    number: "04",
    description:
      "Fill the claim form issued by the service provider and forward all your documents. ",
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
