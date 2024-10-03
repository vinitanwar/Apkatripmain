<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http; 
use App\Services\ApiService;

class FlightController extends Controller
{
    protected $apiService;

    public function __construct(ApiService $apiService)
    {
        $this->apiService = $apiService;
    }

    public function searchFlights(Request $request)
    {
        // Get token using ApiService
        $token = $this->apiService->getToken();
        
     
        $searchPayload = [
            "EndUserIp" => $request->ip(),
            "TokenId" => $token,
            "AdultCount" => "1",
            "ChildCount" => "0",
            "InfantCount" => "0",
            "DirectFlight" => "false",
            "OneStopFlight" => "false",
            "JourneyType" => "1",
            "PreferredAirlines" => null,
            "Segments" => [
                [
                    "Origin" => "DEL",
                    "Destination" => "BOM",
                    "FlightCabinClass" => "1",
                    "PreferredDepartureTime" => "2024-11-06T00: 00: 00",
                    "PreferredArrivalTime" => "2024-11-06T00: 00: 00"
                ]
            ],
            "Sources" => null
        ];
    
     
        $response = Http::withHeaders([

        ])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search', $searchPayload);
    
        // Check for token expiration or invalid token (error code 6)
        if ($response->json('Response.Error.ErrorCode') === 6) {
         
            $token = $this->apiService->authenticate();
    
            // Retry the request with a new token
            $response = Http::withHeaders([
                // 'Authorization' => "Bearer $token"
            ])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search', $searchPayload);
        }
    
        // Return the search response
        return $response->json();
    }
}
