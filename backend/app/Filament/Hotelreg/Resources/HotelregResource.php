<?php

namespace App\Filament\Hotelreg\Resources;

use App\Filament\Hotelreg\Resources\HotelregResource\Pages;
use App\Filament\Hotelreg\Resources\HotelregResource\RelationManagers;
use App\Models\Hotelreg;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class HotelregResource extends Resource
{
    protected static ?string $model = Hotelreg::class;

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
            'index' => Pages\ListHotelregs::route('/'),
            'create' => Pages\CreateHotelreg::route('/create'),
            'edit' => Pages\EditHotelreg::route('/{record}/edit'),
        ];
    }
}
