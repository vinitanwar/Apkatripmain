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
        Schema::create('hotelregs', function (Blueprint $table) {
            $table->id();
            $table->string("property_name");
            $table->text("hotel_des");
            $table->json("hotel_img");
            $table->smallInteger("rating");
            $table->date("built_year");
            $table->date("accepting_since");
            $table->string("email");
            $table->string("number");
            $table->string("land_line");
            $table->string("address");
            $table->decimal('lat', 10, 6); 
            $table->decimal('lang', 10, 6);
            $table->string("house_no");
            $table->string("locality");
            $table->string("pincode");
            $table->string("country");
            $table->string("state");
            $table->string("city");
            $table->text("terms");
            $table->unsignedBigInteger('amenities_id');
            $table->foreign('amenities_id')->references('id')->on('amenities');
            $table->json('rooms_id');
            $table->foreign('rooms_id')->references('id')->on('roomreg');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotelregs');
    }
};
