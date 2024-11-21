<?php

namespace App\Filament\Hotelreg\Resources\HotelregResource\Pages;

use App\Filament\Hotelreg\Resources\HotelregResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditHotelreg extends EditRecord
{
    protected static string $resource = HotelregResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
