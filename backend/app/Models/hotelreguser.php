<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hotelreguser extends Model
{
    use HasFactory;
 protected $fillable=[
    "Full_Name",
    "email",
"password",
"hotel_id",
"useractive"
 ];

 public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }



}
