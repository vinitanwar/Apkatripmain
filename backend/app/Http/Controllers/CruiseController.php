<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CruiseController extends Controller
{
    //
    public function sendCruiseMessage(Request $request){
 $validate=$request->validate([
    "name"=>"required",
"email",
"request_date",
"pickup_des",
"drop_des",
"booking_date",
"additional_notes",
 ]);



    }
}
