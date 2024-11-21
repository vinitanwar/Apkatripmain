<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
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
    protected $casts = [
        'useractive' => 'boolean',
    ];
    public function hotel()
    {
        return $this->belongsTo(HotelReg::class, 'hotel_id', 'id');
    }


}
