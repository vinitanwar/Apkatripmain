// components/FAQSection.js

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  { question: 'How do I book a tour?', answer: 'You can book a tour through our website, by phone, or by visiting our office.' },
  { question: 'What is your cancellation policy?', answer: 'Our cancellation policy varies depending on the tour. Please refer to the specific tour details or contact us for more information.' },
  { question: 'Do you offer custom itineraries?', answer: 'Yes, we specialize in creating custom itineraries tailored to your preferences. Contact us to discuss your travel plans.' },
  { question: 'Is travel insurance included?', answer: ' Travel insurance is not included but can be arranged upon request. We highly recommend purchasing travel insurance for your trip.' },
  { question: 'How can I get updates on travel restrictions?', answer: 'We provide the latest travel updates on our blog and social media channels. You can also contact us directly for specific information.' },
  // Add more FAQs as needed
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="block lg:flex gap-12 items-center px-5 lg:px-20">
    <div className="flex-1 max-w-full lg:max-w-6xl py-10">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-3 border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full py-2 text-left flex items-center justify-between focus:outline-none focus:ring-0 rounded-t-lg"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <FaChevronUp className="h-3 w-3 text-gray-500" />
              ) : (
                <FaChevronDown className="h-3 w-3 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className=" py-2 bg-white ">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
      <img src="/Images/faq.webp" alt="" className= "flex-1 w-full lg:w-1/2 h-auto" />
    </div>
  );
};

export default FAQSection;
