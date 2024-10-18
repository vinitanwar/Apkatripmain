<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class HotelController extends Controller
{
    public function getHotelDetails()
{
    // Step 1: Initialize Guzzle Client
    $client = new Client();

    // Authorization credentials
    $authUsername = 'TBOStaticAPITest';
    $authPassword = 'Tbo@11530818';

    try {
        // Step 2: Make the POST request to get the hotel codes (first 20)
        $hotelCodeListUrl = 'http://api.tbotechnology.in/TBOHolidays_HotelAPI/TBOHotelCodeList';
        $response = $client->post($hotelCodeListUrl, [
            'auth' => [$authUsername, $authPassword], // Authorization headers
            'json' => [
                'CityCode' => '100881', // City code for the specific city
                'IsDetailedResponse' => 'false',
            ],
            'query' => [
                'Language' => 'EN', // you can change this based on your preference
            ]
        ]);

        // Decode the response to get hotel codes
        $responseData = json_decode($response->getBody()->getContents(), true);

        if (isset($responseData['Hotels'])) {
            // Assuming the API response contains a 'Hotels' key, retrieve the first 20 hotels
            $hotels = array_slice($responseData['Hotels'], 0, 20);
        } else {
            return response()->json(['error' => 'No hotel data found'], 404);
        }

        // Step 3: Get the details of each hotel
        $hotelDetails = [];
        foreach ($hotels as $hotel) {
            $hotelDetails[] = [
                'HotelCode' => $hotel['HotelCode'],
                'HotelName' => $hotel['HotelName'],
                'Rating' => $hotel['HotelRating'],
                'Address' => $hotel['Address'],
                'City' => $hotel['CityName'],
                // Add other fields as needed
            ];
        }

        // Step 4: Return the hotel details
        return response()->json($hotelDetails);
    } catch (\Exception $e) {
        // Log the error
        Log::error('Error fetching hotel details: ' . $e->getMessage());
        return response()->json(['error' => 'Something went wrong. Please try again later.'], 500);
    }
}

}
