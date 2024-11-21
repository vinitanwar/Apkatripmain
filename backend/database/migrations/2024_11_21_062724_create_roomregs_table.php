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
        Schema::create('roomregs', function (Blueprint $table) {
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
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roomregs');
    }
};
