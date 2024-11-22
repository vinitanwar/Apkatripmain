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
        Schema::create('hotel_regs', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("email")->unique();
            $table->string("password");
            $table->boolean("useractive")->default(true);
            $table->timestamps();
        });

        // Create hotel_details table
        Schema::create('hotel_details', function (Blueprint $table) {
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
            $table->json('social_media')->nullable();
            $table->string("locality");
            $table->string("pincode");
            $table->string("country");
            $table->string("state");
            $table->string("city");
            $table->text("terms");
            $table->unsignedBigInteger('hotel_id');
            $table->foreign('hotel_id')->references('id')->on('hotel_regs')->onDelete('cascade');
            $table->timestamps();
        });

        // Create amenities table
        Schema::create('amenities', function (Blueprint $table) {
            $table->id();
            $table->json("mandatory");
            $table->json("basic_facilities");
            $table->json("general_services");
            $table->json("outdoor_activities");
            $table->json("common_areas");
            $table->json("food_drinks");
            $table->json("health_wellness");
            $table->json("business_center");
            $table->json("beauty_spa");
            $table->json("security");
            $table->json("transfers");
            $table->json("shopping");
            $table->json("payment_services");
            $table->json("indoor_activities");
            $table->json("family_kids");
            $table->json("pets_essentials");
            $table->unsignedBigInteger('hotel_id');
            $table->foreign('hotel_id')->references('id')->on('hotel_regs')->onDelete('cascade');
            $table->timestamps();
        });

        // Create room_regs table
        Schema::create('room_regs', function (Blueprint $table) {
            $table->id();
            $table->string('room_type');
            $table->string('size');
            $table->string('bed_type');
            $table->string('price');
            $table->string('max_occupancy');
            $table->integer('room_ava');
            $table->json('features');
            $table->json('image');
            $table->text('room_des');
            $table->json('additional_serv');
            $table->unsignedBigInteger('hotel_id');
            $table->foreign('hotel_id')->references('id')->on('hotel_regs')->onDelete('cascade');
            $table->timestamps();
        });

        // Update hotel_details table to link with amenities and room_regs
        Schema::table('hotel_details', function (Blueprint $table) {
            $table->unsignedBigInteger('amenities_id');
            $table->foreign('amenities_id')->references('id')->on('amenities')->onDelete('cascade');

            // Assuming one room for each hotel, hence room_id as foreign key
            $table->unsignedBigInteger('room_id');
            $table->foreign('room_id')->references('id')->on('room_regs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('hotel_details', function (Blueprint $table) {
            $table->dropForeign(['amenities_id']);
            $table->dropForeign(['room_id']);
        });
        Schema::dropIfExists('room_regs');
        Schema::dropIfExists('amenities');
        Schema::dropIfExists('hotel_details');
        Schema::dropIfExists('hotel_regs');
    }
};
