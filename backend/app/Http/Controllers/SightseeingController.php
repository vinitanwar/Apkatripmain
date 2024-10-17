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
            'TokenId' => 'required|string',
            'BookingMode' => 'required|integer',
            'KeyWord' => 'nullable|string',
        ]);


      
        

        $data = $request->all();
        $token = $this->apiService->getToken();
        $data['Token'] = $token; 


        // Call the external API
        $response = Http::post('http://sightseeingbe.tektravels.com/internalSightseeingService.svc/rest/Search', $data);

        // Check for a successful response
        if ($response->successful()) {
            return response()->json($response->json(), 200);
        }

        if ($response->json('Response.Error.ErrorCode') === 6) {
         
            $token = $this->apiService->authenticate();
    

            $response = Http::timeout(90)->withHeaders([])->post('http://sightseeingbe.tektravels.com/internalSightseeingService.svc/rest/Search', $data);

        }

        // Handle the error
        return response()->json(['error' => 'Failed to retrieve data'], $response->status());
    }
}
