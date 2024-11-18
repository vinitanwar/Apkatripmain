<?php

namespace App\Filament\Resources\HotelRegistrationResource\Pages;

use App\Filament\Resources\HotelRegistrationResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListHotelRegistrations extends ListRecords
{
    protected static string $resource = HotelRegistrationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
