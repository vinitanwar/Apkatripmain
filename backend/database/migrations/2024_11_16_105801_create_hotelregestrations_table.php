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
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->json('pictures')->nullable(); // JSON to store multiple images for Outer Area, Hotel Images, Rooms
            $table->json('packages')->nullable(); // JSON for packages like weekdays/weekends
            $table->boolean('is_allowed_by_admin')->default(false); // Checkbox for admin approval
            $table->decimal('commission', 8, 2)->nullable(); // Commission percentage
            $table->json('features')->nullable(); // JSON to store hotel features
            $table->text('description')->nullable(); // Description about the hotel
            $table->text('extra_info')->nullable(); // Additional information
            $table->boolean('refund_policy')->default(false); // Yes or No for refunds
            $table->text('privacy_policies')->nullable(); // Privacy and Policies
            $table->json('social_media_links')->nullable(); // JSON for social media links
            $table->timestamps();
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
