<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelRegistration extends Model
{
    use HasFactory;

    // Define the table name if it's not the plural of the model name
    protected $table = 'hotelregistrations';

    // Define fillable fields for mass assignment
    protected $fillable = [
        'hotel_name',
        'address',
        'coordinates',
        'description',
        'imgSrc',
        'rooms',
        'city',
        'rating',
        'Amenities',
        'contacts',
        'price',
        'social_media',
        'is_allowed_by_admin',
        'refund_policy',
        'privacy_policies'
    ];

    // Define cast types for JSON or array fields
    protected $casts = [
        'coordinates' => 'array', // Automatically cast to array when retrieving
        'imgSrc' => 'array',      // Automatically cast to array
        'rooms' => 'array',       // Automatically cast to array
        'Amenities' => 'array',    // Automatically cast to array
        'contacts' => 'array',    // Automatically cast to array
        'social_media' => 'array' // Automatically cast to array
    ];
}
