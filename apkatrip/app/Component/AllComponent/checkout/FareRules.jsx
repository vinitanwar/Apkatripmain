import React from "react";

const FeesTable = () => {
  return (
    <div className="">
      {/* Section 1: Time Frame to Cancel */}
      <div className="mb-6">
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">
                    <div ><h2>Time Frame to cancel</h2>
                    <p className="text-sm font-normal">Before scheduled departure time</p></div>
                </th>
                <th className="border px-4 py-2 text-left">Airline Fees</th>
                <th className="border px-4 py-2 text-left">EaseMyTrip Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  Cancel Before 72 hours of departure time.
                </td>
                <td className="border px-4 py-2">₹3209</td>
                <td className="border px-4 py-2">₹300</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Cancel within 72 hours & before 4 hours of departure time.
                </td>
                <td className="border px-4 py-2">₹4279</td>
                <td className="border px-4 py-2">₹300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2: Time Frame to Reschedule */}
      <div className="mb-6">
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
              <th className="border px-4 py-2 text-left">
                    <div ><h2 className="">Time Frame to reschedule</h2>
                    <p className="text-sm font-normal">Before scheduled departure time</p></div>
                </th>
                <th className="border px-4 py-2 text-left">Airline Fees</th>
                <th className="border px-4 py-2 text-left">EaseMyTrip Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  Reschedule before 72 hours of after departure time.
                </td>
                <td className="border px-4 py-2">₹2250</td>
                <td className="border px-4 py-2">₹300</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Reschedule within 72 hours & before 4 hours of departure time.
                </td>
                <td className="border px-4 py-2">₹3209</td>
                <td className="border px-4 py-2">₹300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Terms & Conditions */}
      <div className="border-2 p-2">
        <h2 className="text-md font-medium mb-2">Terms & Conditions</h2>
        <ul className="text-sm text-gray-600 list-disc ml-5 space-y-2">
          <li>
            Total Rescheduling Charges Airlines Rescheduling fees Fare
            Difference if applicable + EaseMyTrip Fees
          </li>
          <li>
            The airline cancel reschedule fees is indicative and can be changed
            without any prior notice by the airlines.
          </li>
          <li>
            EaseMyTrip does not guarantee the accuracy of cancel reschedule
            fees.
          </li>
          <li>
            Partial cancellation is not allowed on the flight tickets which are
            booked under special round trip discounted fares.
          </li>
          <li>
            Airlines doesn't allow any additional baggage allowance for any
            infant added in the booking.
          </li>
          <li>
            In certain situations of restricted cases, no amendments and
            cancellation is allowed.
          </li>
          <li>
            Airlines cancel reschedule should be reconfirmed before requesting
            for a cancellation or amendment.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeesTable;
