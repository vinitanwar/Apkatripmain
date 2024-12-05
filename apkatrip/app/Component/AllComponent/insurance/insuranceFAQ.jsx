// components/FAQSection.js

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is travel insurance?",
      answer: "Travel insurance is financial protection and help towards your travels. It avails advantages relating to medical emergencies, cancellation of journeys, delay of flights, loss of baggage, amongst others.",
    },
    {
      question: "Why should I buy travel insurance?",
      answer: "This secures you in case something may pop out that needs to be taken care of. You feel at peace; besides, it covers medical conditions, theft, or delays to mess up the trip you have planned.",
    },
    {
      question: "Can I buy travel insurance even after booking my trip?",
      answer: "Yes, and a best practice is to purchase travel insurance at time of booking for the strongest protection possible-in this case, especially cancellation.",
    },
    {
      question: "Do travel insurances cover COVID-19-related problems?",
      answer: "Many policies now have coverage in case of COVID, including medical services, quarantine costs, and cancellations due to infection. Check the wording of your policy for full details.",
    },
    {
      question: "Is travel insurance compulsory?",
      answer: "In some countries, you need to show proof of travel insurance to enter that country. Prior to leaving, check what is required at your destination.",
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
