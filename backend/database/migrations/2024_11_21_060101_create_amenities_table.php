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




            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('amenities');
    }
};
