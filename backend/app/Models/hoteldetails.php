<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hoteldetails extends Model
{
    use HasFactory;


    protected $table= 'hotel_details';
    
    protected $fillable=[
        'property_name',
        'hotel_des',
        'hotel_img',
        'rating',
        'built_year',
        'accepting_since',
        'email',
        'number',
        'land_line',
        'address',
        'lat',
        'lang',
        'house_no',
        'locality',
        'pincode',
        'country',
        'state',
        'city',
        'terms',
        'amenities_id',

    ];

    protected $dates = [
        'built_year', 
        'accepting_since'
    ];
    public function amenities()
    {
        return $this->belongsTo(Amenity::class, 'amenities_id');
    }

    
    protected $casts = [
        'hotel_img' => 'array',  
    ];

}
