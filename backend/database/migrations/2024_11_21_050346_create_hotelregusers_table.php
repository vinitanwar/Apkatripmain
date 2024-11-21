<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    { 
        Schema::create('hotelregusers', function (Blueprint $table) {
            $table->id();
            $table->string("Full_Name");
            $table->string("email")->unique();;
            $table->string("password");
            $table->unsignedBigInteger('hotel_id');
            $table->foreign('hotel_id')->references('id')->on('hotelreg');
            $table->boolean("useractive")->default(true);
             $table->timestamps();
        });
    } 

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotelregusers');
    }
};
