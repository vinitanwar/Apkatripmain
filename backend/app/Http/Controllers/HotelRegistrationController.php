<?php

namespace App\Http\Controllers;

use App\Models\HotelRegistration;
use Illuminate\Http\Request;
use Validator;

class HotelRegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Retrieve all hotels
        $hotels = HotelRegistration::all();
        return response()->json($hotels);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // This would typically return a form, but in an API, we just send a message
        return response()->json(['message' => 'Create form not implemented in API.']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validation rules for creating a new hotel registration
        $validator = Validator::make($request->all(), [
            'hotel_name' => 'required|string|max:255',
            'address' => 'required|string',
            'coordinates' => 'nullable|array',
            'coordinates.latitude' => 'nullable|numeric',
            'coordinates.longitude' => 'nullable|numeric',
            'description' => 'nullable|string',
            'imgSrc' => 'nullable|array',
            'imgSrc.outer_images' => 'nullable|array',
            'imgSrc.outer_images.*' => 'nullable|url',
            'imgSrc.hotel_images' => 'nullable|array',
            'imgSrc.hotel_images.*' => 'nullable|url',
            'imgSrc.room_images' => 'nullable|array',
            'imgSrc.room_images.*' => 'nullable|url',
            'rooms' => 'nullable|array',
            'city' => 'nullable|string|max:255',
            'rating' => 'nullable|numeric|min:0|max:5',
            'features' => 'nullable|array',
            'contacts' => 'nullable|array',
            'price' => 'nullable|numeric',
            'final_price' => 'nullable|numeric',
            'social_media' => 'nullable|array',
            'refund_policy' => 'nullable|string',
            'privacy_policies' => 'nullable|string',
        ]);

        // If validation fails, return the error messages
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Create the hotel registration record
        $hotel = HotelRegistration::create($request->all());

        // Return the created hotel as JSON
        return response()->json($hotel, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(HotelRegistration $hotelRegistration)
    {
        // Return the details of the specific hotel registration
        return response()->json($hotelRegistration);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HotelRegistration $hotelRegistration)
    {
        // Return a message indicating that the edit form is not available in the API
        return response()->json(['message' => 'Edit form not implemented in API.']);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HotelRegistration $hotelRegistration)
    {
        // Validation rules for updating a hotel registration
        $validator = Validator::make($request->all(), [
            'hotel_name' => 'sometimes|required|string|max:255',
            'address' => 'sometimes|required|string',
            'coordinates' => 'nullable|array',
            'coordinates.latitude' => 'nullable|numeric',
            'coordinates.longitude' => 'nullable|numeric',
            'description' => 'nullable|string',
            'imgSrc' => 'nullable|array',
            'imgSrc.outer_images' => 'nullable|array',
            'imgSrc.outer_images.*' => 'nullable|url',
            'imgSrc.hotel_images' => 'nullable|array',
            'imgSrc.hotel_images.*' => 'nullable|url',
            'imgSrc.room_images' => 'nullable|array',
            'imgSrc.room_images.*' => 'nullable|url',
            'rooms' => 'nullable|array',
            'city' => 'nullable|string|max:255',
            'rating' => 'nullable|numeric|min:0|max:5',
            'features' => 'nullable|array',
            'contacts' => 'nullable|array',
            'price' => 'nullable|numeric',
            'final_price' => 'nullable|numeric',
            'social_media' => 'nullable|array',
            'refund_policy' => 'nullable|string',
            'privacy_policies' => 'nullable|string',
        ]);

        // If validation fails, return the error messages
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Update the hotel registration with validated data
        $hotelRegistration->update($request->all());

        // Return the updated hotel registration as JSON
        return response()->json($hotelRegistration);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HotelRegistration $hotelRegistration)
    {
        // Delete the hotel registration
        $hotelRegistration->delete();

        // Return success message after deletion
        return response()->json(['message' => 'Hotel registration deleted successfully.']);
    }
}
