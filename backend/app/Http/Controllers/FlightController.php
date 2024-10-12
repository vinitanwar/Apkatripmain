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
      
        $token = $this->apiService->getToken();

        $validatedData = $request->validate([
            "EndUserIp"=>'required',
            'AdultCount' => 'required|integer',
            'Origin' => 'required|string',
            'Destination' => 'required|string',
            'FlightCabinClass' => 'required|integer',
            'PreferredDepartureTime' => 'required',
            'ChildCount' => 'nullable|integer',
            'InfantCount' => 'nullable|integer',
            'DirectFlight' => 'nullable|boolean',
            'OneStopFlight' => 'nullable|boolean',
            'JourneyType' => 'required|integer',
            'PreferredAirlines' => 'nullable|string',

        ]);
        
        // Prepare the search payload with the validated data and token
        $searchPayload = [
            "EndUserIp" => $validatedData['EndUserIp'], 
            "TokenId" => $token,
            "AdultCount" => $validatedData['AdultCount'],
            "ChildCount" => $validatedData['ChildCount'],
            "InfantCount" => $validatedData['InfantCount'],
            "DirectFlight" => $validatedData['DirectFlight'],
                        "OneStopFlight" => $validatedData['OneStopFlight'],
                        "JourneyType" => $validatedData['JourneyType'],
                        "PreferredAirlines" => $validatedData['PreferredAirlines'],
            "Segments" => [
                [
                    "Origin" =>$validatedData['Origin'],
                    "Destination" =>$validatedData['Destination'],
                    "FlightCabinClass" =>$validatedData['FlightCabinClass'],     
                    "PreferredDepartureTime" =>$validatedData['PreferredDepartureTime'],        
                    "PreferredArrivalTime" =>$validatedData['PreferredDepartureTime']                    // "PreferredDepartureTime" =>$validatedData['PreferredDepartureTime'],
                    // "PreferredArrivalTime" =>$validatedData['PreferredDepartureTime']
                ]
            ],
            "Sources" => null
        ];
    
     
        $response = Http::timeout(100)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search', $searchPayload);

    

        if ($response->json('Response.Error.ErrorCode') === 6) {
         
            $token = $this->apiService->authenticate();
    

            $response = Http::timeout(90)->withHeaders([])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search', $searchPayload);

        }
    
        //  Return the search response
        return $response->json();
    }
}
