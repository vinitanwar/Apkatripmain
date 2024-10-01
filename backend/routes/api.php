<?php
use App\Http\Controllers\AirportController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get("/airports",[AirportController::class,"getallPorts"]);



// age = [1,2,3,0,null,2,4]