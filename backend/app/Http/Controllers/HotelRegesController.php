<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\hotelreguser;
class HotelRegesController extends Controller
{
    //

    public function getHotelUser(Request $Req){

$user=hotelreguser::find($Req->id);

if ($user) {
    return $user;
} else {
    // Return a response indicating the user was not found
    return response()->json(['message' => 'User not found'], 404);
}
    }



    public function signupHotel(Request $Req){



        
    }





}
