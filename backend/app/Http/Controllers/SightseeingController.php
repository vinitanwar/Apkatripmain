<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Services\ApiService;
class SightseeingController extends Controller
{

    protected $apiService;

    public function __construct(ApiService $apiService)
    {
        $this->apiService = $apiService;
    }


    public function search(Request $request)
    {
        try {
            // Validate incoming request data
            $request->validate([
                'CountryCode' => 'required|string',
                'TravelStartDate' => 'required|date',
                'FromDate' => 'required|date',
                'ToDate' => 'required|date',
                'AdultCount' => 'required|integer',
                'ChildCount' => 'nullable|integer',
                'ChildAge' => 'nullable|array',
                'PreferredLanguage' => 'nullable|integer',
                'PreferredCurrency' => 'required|string',
                'IsBaseCurrencyRequired' => 'required|boolean',
                'EndUserIp' => 'required|ip',
                
                'BookingMode' => 'required|integer',
                'KeyWord' => 'nullable|string',
            ]);
    
            // Fetch data and obtain a valid token
            $data = $request->all();
            $token = $this->apiService->getToken();
            $data['TokenId'] = $token; 
    
            // Call the external API
            $response = Http::timeout(90) // Timeout handling
                ->post('http://sightseeingbe.tektravels.com/internalSightseeingService.svc/rest/Search', $data);
    
            // Check for successful response
            if ($response->successful()) {
                return response()->json($response->json(), 200);
            }
    
            // Token expiration error handling (ErrorCode = 6)
            if ($response->json('Response.Error.ErrorCode') === 6) {
                $token = $this->apiService->authenticate();
                $data['TokenId'] = $token; // Update the token
    
                // Retry the request with the new token
                $response = Http::timeout(90)->post('http://sightseeingbe.tektravels.com/internalSightseeingService.svc/rest/Search', $data);
    
                // Check if the retried request is successful
                if ($response->successful()) {
                    return response()->json($response->json(), 200);
                }
            }
    
            // If still not successful, return an error message
            return response()->json(['error' => 'Failed to retrieve data', 'details' => $response->json()], $response->status());
    
        } catch (\Illuminate\Http\Client\RequestException $e) {
            // Handle client request exceptions (e.g., connection issues, timeouts)
            return response()->json(['error' => 'Request failed', 'message' => $e->getMessage()], 500);
    
        } catch (\Exception $e) {
            // Handle any other general exceptions
            return response()->json(['error' => 'An unexpected error occurred', 'message' => $e->getMessage()], 500);
        }
    }
    
}
