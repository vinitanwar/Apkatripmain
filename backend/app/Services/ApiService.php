<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use App\Models\ApiToken;

class ApiService
{
    private $clientId;
    private $username;
    private $password;

    public function __construct()
    {
        $this->clientId = env('API_CLIENT_ID');
        $this->username = env('API_USERNAME');
        $this->password = env('API_PASSWORD');
    }

    public function authenticate()
    {
        $response = Http::post('http://api.tektravels.com/SharedServices/SharedData.svc/rest/Authenticate', [
            'ClientId' => $this->clientId,
            'UserName' => $this->username,
            'Password' => $this->password,
            'EndUserIp' => request()->ip(),
        ]);

        if ($response->successful()) {
            $data = $response->json();
            $token = $data['TokenId'];
            $expiresAt = now()->addHours(24);

            ApiToken::updateOrCreate(
                ['id' => 1],
                ['token' => $token, 'expires_at' => $expiresAt]
            );

            return $token;
        }

        throw new \Exception('Authentication failed: ' . $response->body());
    }

    public function getToken()
    {
        $tokenData = ApiToken::first();

        if ($tokenData && now()->lessThan($tokenData->expires_at)) {
            return $tokenData->token;
        }

        return $this->authenticate();
    }

    // public function searchFlights($searchPayload)
    // {
    //     $token = $this->getToken();

    //     $response = Http::withHeaders([
    //         'Authorization' => "Bearer $token"
    //     ])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search', $searchPayload);

    //     // If the token is invalid, authenticate again and retry
    //     if ($response->json('Response.Error.ErrorCode') === 6) {
    //         $token = $this->authenticate();

    //         $response = Http::withHeaders([
    //             'Authorization' => "Bearer $token"
    //         ])->post('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search', $searchPayload);
    //     }

    //     return $response->json();
    // }
}
