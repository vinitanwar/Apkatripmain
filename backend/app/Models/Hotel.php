<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Hotel extends Authenticatable
{
    protected $table = 'hotels';
    use HasFactory;
    protected $fillable = [
        'name',
        'phone', 
        'password', 
        'slug', 
        'useractive',
    ];


    protected $hidden = [
        'password',
       
];

   
    
    protected function casts(): array
    {
        return [
            
            'password' => 'hashed',
        ];
    }
}
