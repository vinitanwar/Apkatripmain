<?php

namespace App\Filament\Hotelreg\Resources\HotelregResource\Pages;

use App\Filament\Hotelreg\Resources\HotelregResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListHotelregs extends ListRecords
{
    protected static string $resource = HotelregResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
