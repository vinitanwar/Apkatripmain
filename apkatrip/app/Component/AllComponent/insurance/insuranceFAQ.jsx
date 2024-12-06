// components/FAQSection.js

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is travel insurance, and why do I need it?",
      answer: "Travel insurance covers unexpected events like trip cancellations, medical emergencies, or lost luggage. It's essential for ensuring a stress-free journey.",
    },
    {
      question: "Does travel insurance cover COVID-19 expenses?",
      answer: "Yes, most travel insurance plans now include COVID-19 coverage for medical emergencies, cancellations, or delays caused by the pandemic.",
    },
    {
      question: "Can I purchase travel insurance after booking my trip?",
      answer: "Yes, you can buy travel insurance after booking your trip, but it's best to get it as soon as possible to maximize coverage benefits.",
    },
    {
      question: "What does travel insurance typically exclude?",
      answer: "Common exclusions include pre-existing medical conditions, risky activities like skydiving, and non-refundable expenses not covered by the policy.",
    },
    {
      question: "How do I file a claim with my travel insurance?",
      answer: "Contact your insurer, provide necessary documents like receipts or medical reports, and fill out the claim form as instructed.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-start grid grid-cols-1 xl:grid-cols-2 gap-12 m-6 px-5 xl:px-20 py-10">
      {/* Image Section */}
      <div className="  ">
        <img
          src="/Images/faq.webp"
          alt="Travel Insurance FAQs"
          className="w-full lg:h-[27rem] xl:h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* FAQ Section */}
      <div className=" max-w-full lg:max-w-6xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Travel Insurance FAQs</h2>
        <p className="mb-6 text-gray-700">
          Get answers to your most common questions about travel insurance to make your journey with ApkaTrip.com hassle-free!
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-4 px-6 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 focus:outline-none rounded-t-lg"
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <FaChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
