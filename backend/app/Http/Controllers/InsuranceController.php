<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ApiService;
use Illuminate\Support\Facades\Http;


class InsuranceController extends Controller
{
    //
    protected $apiService;

    public function __construct(ApiService $apiService)
    {
        $this->apiService = $apiService;
    }





    public function GetInsurance(Request $request){
        $token = $this->apiService->getToken();

        $validate=$request->validate([
     'EndUserIp' => 'required|ip',
      'PlanCategory' => 'required|in:1,2,3,4,5,6',
      'PlanCoverage' => 'required|in:1,2,3,4,5,6,7,8',
      'PlanType' => 'required|in:1,2',
    //   'TravelStartDate' => 'required|date_format:d/m/Y',
          'TravelStartDate' => 'required',

      'TravelEndDate' => 'required',
      'NoOfPax' => 'required|integer|min:1',
      'PaxAge' => 'required|array',
     ]);


     
     $validate["TokenId"]=$token;
   

     $response= Http::timeout(100)->post("https://InsuranceBE.tektravels.com/InsuranceService.svc/rest/Search",$validate);

if($response->json('Response.Error.ErrorCode') === 6){

    $token = $this->apiService->authenticate();
    $validate['TokenId'] = $token;
    $response= Http::timeout(100)->post("https://InsuranceBE.tektravels.com/InsuranceService.svc/rest/Search",$validate);
}
  


return $response ;



    } 




}

