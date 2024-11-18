<?php

namespace App\Filament\Resources\HotelRegistrationResource\Pages;

use App\Filament\Resources\HotelRegistrationResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditHotelRegistration extends EditRecord
{
    protected static string $resource = HotelRegistrationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
