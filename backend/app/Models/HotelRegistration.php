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
        'latitude',
        'longitude',
        'outer_area_images',
        'hotel_images',
        'room_images',
        'weekdays_packages',
        'weekends_packages',
        'is_allowed_by_admin',
        'commission',
        'features',
        'description',
        'extra_info',
        'refund_policy',
        'privacy_policy',
        'social_media_links',
    ];

    // Define cast types for JSON or array fields
    protected $casts = [
        'outer_area_images' => 'array',
        'hotel_images' => 'array',
        'room_images' => 'array',
        'weekdays_packages' => 'array',
        'weekends_packages' => 'array',
        'features' => 'array',
        'social_media_links' => 'array',
    ];
}
