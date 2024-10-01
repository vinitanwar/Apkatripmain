<?php
use App\Http\Controllers\AirportController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');







Route::apiResource('v1/airports', AirportController::class);


