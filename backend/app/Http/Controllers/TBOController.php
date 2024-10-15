<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TBOController extends Controller
{
    // TBO API Credentials
    private $username = 'TBOStaticAPITest';
    private $password = 'Tbo@11530818';

    // Base URLs for the TBO APIs
    private $cityApiUrl = "http://api.tbotechnology.in/TBOHolidays_HotelAPI/CityList";
    private $hotelApiUrl = "http://api.tbotechnology.in/TBOHolidays_HotelAPI/TBOHotelCodeList";

    // Method to fetch cities
    public function fetchCities(Request $request)
    {
        // Validate request
        $request->validate([
            'CountryCode' => 'required|string|max:2', // Assuming country code is a 2-letter country code
        ]);
    
        try {
            $response = Http::withHeaders([
                'Authorization' => 'Basic ' . base64_encode("{$this->username}:{$this->password}"),
                'Content-Type' => 'application/json',
            ])->post($this->cityApiUrl, [
                'CountryCode' => $request->CountryCode,
            ]);
    
            // Check if the response is successful
            if ($response->successful()) {
                return response()->json($response->json(), $response->status());
            } else {
                // Handle unsuccessful responses
                return response()->json([
                    'error' => 'Failed to fetch cities',
                    'message' => $response->json(),
                ], $response->status());
            }
        } catch (\Exception $e) {
            // Catch any exceptions that occur during the API request
            return response()->json([
                'error' => 'An error occurred while fetching cities',
                'message' => $e->getMessage(),
            ], 500); // Internal Server Error
        }
    }
    

    // Method to fetch hotels
    public function fetchHotels(Request $request)
    {
        // Validate request
        $request->validate([
            'CityCode' => 'required|string',
        ]);

        $response = Http::withHeaders([
            'Authorization' => 'Basic ' . base64_encode("{$this->username}:{$this->password}"),
            'Content-Type' => 'application/json',
        ])->post($this->hotelApiUrl, [
            'CityCode' => $request->CityCode,
            'IsDetailedResponse' => true,
        ]);

        return response()->json($response->json(), $response->status());
    }
}
