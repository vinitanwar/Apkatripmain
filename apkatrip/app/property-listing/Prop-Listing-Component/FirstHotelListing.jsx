"use client"
import React, { useState } from 'react'
import { FaHotel, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

const FirstHotelListing = () => {

    const [formData, setFormData] = useState({
        property_name: "",
        hotel_des: "",
        hotel_img: "",
        rating: "",
        built_year: "",
        accepting_since: "",
        email: "",
        number: "",
        land_line: "",
        address: "",
        house_no: "",
        locality: "",
        pincode: "",
        country: "",
        state: "",
        city: "",
        terms: false,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleCheckboxChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          terms: e.target.checked,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
      };

  return (
    <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-center mb-8">Hotel Form</h1>
    <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-3 gap-4">
      {/* Property Name */}
      <div className="flex items-center space-x-2">
        <FaHotel className="text-xl text-gray-600" />
        <input
          type="text"
          name="property_name"
          placeholder="Property Name"
          value={formData.property_name}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Hotel Description */}
      <div className="flex items-center space-x-2">
        <textarea
          name="hotel_des"
          placeholder="Hotel Description"
          value={formData.hotel_des}
          onChange={handleChange}
          rows="4"
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Hotel Image URL */}
      <div className="flex items-center space-x-2">
        <input
          type="url"
          name="hotel_img"
          placeholder="Hotel Image URL"
          value={formData.hotel_img}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-2">
        <FaStar className="text-xl text-yellow-500" />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-20 p-2 border border-gray-300 rounded-md"
          min="1"
          max="5"
        />
      </div>

      {/* Built Year */}
      <div className="flex items-center space-x-2">
        <input
          type="number"
          name="built_year"
          placeholder="Built Year"
          value={formData.built_year}
          onChange={handleChange}
          className="w-32 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Accepting Since */}
      <div className="flex items-center space-x-2">
        <input
          type="date"
          name="accepting_since"
          value={formData.accepting_since}
          onChange={handleChange}
          className="w-32 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Email */}
      <div className="flex items-center space-x-2">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Contact Number */}
      <div className="flex items-center space-x-2">
        <input
          type="tel"
          name="number"
          placeholder="Contact Number"
          value={formData.number}
          onChange={handleChange}
          className="w-48 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Landline */}
      <div className="flex items-center space-x-2">
        <input
          type="tel"
          name="land_line"
          placeholder="Landline"
          value={formData.land_line}
          onChange={handleChange}
          className="w-48 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Address */}
      <div className="flex items-center space-x-2">
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          rows="2"
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* House No */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="house_no"
          placeholder="House No"
          value={formData.house_no}
          onChange={handleChange}
          className="w-32 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Locality */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="locality"
          placeholder="Locality"
          value={formData.locality}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Pincode */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="w-32 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Country */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* State */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* City */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Terms */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleCheckboxChange}
          className="h-4 w-4"
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I agree to the terms and conditions
        </label>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default FirstHotelListing
