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

        $validatedData = $request->validate([
            'AdultCount' => 'required|integer',
            'ChildCount' => 'nullable|integer',
            'InfantCount' => 'nullable|integer',
            'DirectFlight' => 'nullable|boolean',
            'OneStopFlight' => 'nullable|boolean',
            'JourneyType' => 'required|integer',
            'PreferredAirlines' => 'nullable|string',
            'AdultCount' => 'required|integer',
            'Origin' => 'required|string',
            'Destination' => 'required|string',
            'FlightCabinClass' => 'required|string',
            'PreferredDepartureTime' => 'required|date',
        ]);
        
     
        $searchPayload = [
            "EndUserIp" => $request->ip(),
            "TokenId" => $token,
            "AdultCount" => $validatedData['AdultCount'] ?? "1",
            "ChildCount" => $validatedData['ChildCount']??"0",
            "InfantCount" =>$validatedData['InfantCount']?? "0",
            "DirectFlight" =>$validatedData['DirectFlight']?? "true",
            "OneStopFlight" =>$validatedData['OneStopFlight']?? "false",
            "JourneyType" =>$validatedData['JourneyType']?? "1",
            "PreferredAirlines" =>$validatedData['PreferredAirlines']?? null,
            "Segments" => [
                [
                    "Origin" =>$validatedData['Origin']?? "DEL",
                    "Destination" =>$validatedData['Destination']?? "BOM",
                    "FlightCabinClass" =>$validatedData['FlightCabinClass']?? "1",
                    "PreferredDepartureTime" =>$validatedData['PreferredDepartureTime']?? "2024-11-06T00: 00: 00",
                    "PreferredArrivalTime" =>$validatedData['PreferredDepartureTime']?? "2024-11-06T00: 00: 00"
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
