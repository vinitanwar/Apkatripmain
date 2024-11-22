<?php

namespace App\Filament\Hotelreg\Resources;

use App\Filament\Hotelreg\Resources\HoteldetailsResource\Pages;
use App\Filament\Hotelreg\Resources\HoteldetailsResource\RelationManagers;
use App\Models\hoteldetails;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class HoteldetailsResource extends Resource
{
    protected static ?string $model = Hoteldetails::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListHoteldetails::route('/'),
            'create' => Pages\CreateHoteldetails::route('/create'),
            'edit' => Pages\EditHoteldetails::route('/{record}/edit'),
        ];
    }
}
