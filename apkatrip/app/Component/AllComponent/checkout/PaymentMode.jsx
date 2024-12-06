import { useState } from "react";
import { FaCreditCard, FaUniversity, FaWallet, FaGooglePay, FaGift, FaPercent } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";

export default function PaymentPage() {
  const paymentModes = [
    {
      name: "Credit/Debit/ATM Cards",
      description: "Use VISA, Mastercard, American Express etc.",
      icon: <FaCreditCard className="text-lg" />,
    },
    {
      name: "Net Banking",
      description: "All Major banks are supported",
      icon: <FaUniversity className="text-lg" />,
    },
    {
      name: "Wallets",
      description: "Choose Mobikwik, Payzapp, PhonePe or Amazon",
      icon: <FaWallet className="text-lg" />,
    },
    {
      name: "UPI",
      description: "Make Online Payments Directly from Bank",
      icon: <FaGooglePay className="text-lg" />,
    },
    {
      name: "EMI",
      description: "HSBC, RBL, ICICI, Yes and others bank for EMI",
      icon: <FaPercent className="text-lg" />,
    },
    {
      name: "Pay with Rewards",
      description: "Check Your Rewards",
      icon: <FaGift className="text-lg" />,
    },
    {
      name: "GiftCard",
      description: "Pay with GiftCard",
      icon: <MdCardGiftcard className="text-lg" />,
    },
    {
      name: "PayLater",
      description: "Simpl, ICICI Bank Pay later and Mobikwik Zip Available",
      icon: <FaPercent className="text-lg" />,
    },
    {
      name: "GooglePay",
      description: "Pay Easily with Google Pay",
      icon: <FaGooglePay className="text-lg" />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="h-auto bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left Tab Navigation */}
        <div className="w-full lg:w-1/4 bg-blue-50">
          {paymentModes.map((mode, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 cursor-pointer outline-none ${
                activeTab === index
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div>{mode.icon}</div>
              <div>
                <h3 className="text-sm font-medium">{mode.name}</h3>
                <p
                  className={`text-xs ${
                    activeTab === index ? "text-white" : "text-gray-500"
                  }`}
                >
                  {mode.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-3/4 p-6">
          <form className="space-y-6">
            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter Your Card No.
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none"
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
            </div>

            {/* Card Holder Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter Card Holder Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none"
                placeholder="Card Holder Name"
              />
            </div>

            {/* Expiry Date and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Valid Through (MM/YY)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none"
                  placeholder="CVV"
                />
              </div>
            </div>

            {/* Save Card Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="saveCard"
                className="focus:outline-none"
              />
              <label htmlFor="saveCard" className="text-sm text-gray-700">
                Save this card for faster checkout
              </label>
            </div>

            {/* Total and Submit */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Total Fare: ₹12717</span>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-orange-600 focus:outline-none"
              >
                Make Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
