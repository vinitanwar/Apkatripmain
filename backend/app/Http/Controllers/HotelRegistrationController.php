<?php

namespace App\Http\Controllers;

use App\Models\HotelRegistration;
use Illuminate\Http\Request;

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
        return response()->json(['message' => 'Create form not implemented in API.']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
     
        $validated = $request->validate([
            'hotel_name' => 'required|string|max:255',
            'address' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'outer_area_images' => 'nullable|array',
            'hotel_images' => 'nullable|array',
            'room_images' => 'nullable|array',
            'weekdays_packages' => 'nullable|array',
            'weekends_packages' => 'nullable|array',
            'is_allowed_by_admin' => 'nullable|boolean',
            'commission' => 'nullable|numeric',
            'features' => 'nullable|array',
            'description' => 'nullable|string',
            'extra_info' => 'nullable|string',
            'refund_policy' => 'nullable|string',
            'privacy_policy' => 'nullable|string',
            'social_media_links' => 'nullable|array',
        ]);

     
        $hotel = HotelRegistration::create($validated);

        return response()->json(['message' => 'Hotel registration created successfully.', 'data' => $hotel], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(HotelRegistration $hotelRegistration)
    {
        return response()->json($hotelRegistration);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HotelRegistration $hotelRegistration)
    {
     
        return response()->json(['message' => 'Edit form not implemented in API.']);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HotelRegistration $hotelRegistration)
    {
     
        $validated = $request->validate([
            'hotel_name' => 'nullable|string|max:255',
            'address' => 'nullable|string',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'outer_area_images' => 'nullable|array',
            'hotel_images' => 'nullable|array',
            'room_images' => 'nullable|array',
            'weekdays_packages' => 'nullable|array',
            'weekends_packages' => 'nullable|array',
            'is_allowed_by_admin' => 'nullable|boolean',
            'commission' => 'nullable|numeric',
            'features' => 'nullable|array',
            'description' => 'nullable|string',
            'extra_info' => 'nullable|string',
            'refund_policy' => 'nullable|string',
            'privacy_policy' => 'nullable|string',
            'social_media_links' => 'nullable|array',
        ]);

     
        $hotelRegistration->update($validated);

        return response()->json(['message' => 'Hotel registration updated successfully.', 'data' => $hotelRegistration]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HotelRegistration $hotelRegistration)
    {
        $hotelRegistration->delete();

        return response()->json(['message' => 'Hotel registration deleted successfully.']);
    }
}
