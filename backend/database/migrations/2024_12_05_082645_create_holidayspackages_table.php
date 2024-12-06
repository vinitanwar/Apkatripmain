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
        Schema::create('holidayspackages', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Package Name
            $table->string('location'); // Location of the package (e.g., Bali, Indonesia)
            $table->string('duration'); // Duration of the trip (e.g., "5 Nights / 6 Days")
            $table->json('price'); // Price structure (withFlight, withoutFlight)
            $table->json('highlights'); // Highlights of the package
            $table->json('inclusions'); // Inclusions in the package
            $table->json('exclusions'); // Exclusions in the package
            $table->float('rating', 3, 2); // Rating for the package
            $table->json('reviews'); // Reviews (user, rating, comment, date)
            $table->json('images'); // Package images
            $table->json('cancellationPolicy'); // Cancellation policy
            $table->json('itinerary'); // Day-by-day itinerary with activities and images
            $table->json('additionalInfo'); // Additional information (e.g., visa requirements, best season)
            $table->timestamps(); // Timestamps for created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('holidayspackages');
    }
};
