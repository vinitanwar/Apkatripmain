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
        Schema::create('hotelregistrations', function (Blueprint $table) {
            $table->id();
            $table->string('hotel_name');
            $table->text('address');
            $table->json('coordinates')->nullable(); // Array: latitude and longitude
            $table->text('description')->nullable();
            $table->json('imgSrc')->nullable(); // Array: image sources
            $table->json('rooms')->nullable(); // Array: room types and details
            $table->string('city')->nullable(); // Changed "City" to lowercase "city"
            $table->decimal('rating', 2, 1)->nullable(); // Rating as decimal, example: 4.5
            $table->json('Amenities')->nullable(); // Array: Hotel features like "wifi", "pool"
            $table->json('contacts')->nullable(); // Array: Contact details (phones, emails)
            $table->decimal('price', 10, 2)->nullable(); // Price field
            $table->json('social_media')->nullable(); // Array: social media links
            $table->boolean('is_allowed_by_admin')->default(false); // Admin approval flag
            $table->text('refund_policy')->nullable(); // Refund policy (nullable)
            $table->text('privacy_policies')->nullable(); // Privacy policy (nullable)
            $table->timestamps(); // Created at, Updated at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotelregistrations');
    }
};
