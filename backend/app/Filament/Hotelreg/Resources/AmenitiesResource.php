<?php

namespace App\Filament\Hotelreg\Resources;

use App\Filament\Hotelreg\Resources\AmenitiesResource\Pages;
use App\Filament\Hotelreg\Resources\AmenitiesResource\RelationManagers;
use App\Models\Amenities;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AmenitiesResource extends Resource
{
    protected static ?string $model = Amenities::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Fieldset::make('Mandatory Amenities')
                    ->schema([
                        Forms\Components\Toggle::make('mandatory')
                            ->label('Mandatory Amenities')
                            ->required(),
                    ]),

                Forms\Components\Fieldset::make('Basic Facilities')
                    ->schema([
                        Forms\Components\CheckboxList::make('basic_facilities')
                            ->options([
                                'Free Wi-Fi' => 'Free Wi-Fi',
                                '24-hour Reception' => '24-hour Reception',
                                'Power Backup' => 'Power Backup',
                            ])
                            ->label('Basic Facilities'),
                    ]),

                Forms\Components\Fieldset::make('General Services')
                    ->schema([
                        Forms\Components\CheckboxList::make('general_services')
                            ->options([
                                'Room Service' => 'Room Service',
                                'Laundry Service' => 'Laundry Service',
                                'Housekeeping' => 'Housekeeping',
                            ])
                            ->label('General Services'),
                    ]),

                Forms\Components\Fieldset::make('Outdoor Activities')
                    ->schema([
                        Forms\Components\CheckboxList::make('outdoor_activities')
                            ->options([
                                'Swimming Pool' => 'Swimming Pool',
                                'Tennis Court' => 'Tennis Court',
                                'Cycling' => 'Cycling',
                            ])
                            ->label('Outdoor Activities'),
                    ]),

                Forms\Components\Fieldset::make('Common Areas')
                    ->schema([
                        Forms\Components\CheckboxList::make('common_areas')
                            ->options([
                                'Lobby' => 'Lobby',
                                'Garden' => 'Garden',
                                'Terrace' => 'Terrace',
                            ])
                            ->label('Common Areas'),
                    ]),

                Forms\Components\Fieldset::make('Food & Drinks')
                    ->schema([
                        Forms\Components\CheckboxList::make('food_drinks')
                            ->options([
                                'Restaurant' => 'Restaurant',
                                'Bar' => 'Bar',
                                'Coffee Shop' => 'Coffee Shop',
                            ])
                            ->label('Food & Drinks'),
                    ]),

                Forms\Components\Fieldset::make('Health & Wellness')
                    ->schema([
                        Forms\Components\CheckboxList::make('health_wellness')
                            ->options([
                                'Gym' => 'Gym',
                                'Spa' => 'Spa',
                                'Yoga Center' => 'Yoga Center',
                            ])
                            ->label('Health & Wellness'),
                    ]),
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
            'index' => Pages\ListAmenities::route('/'),
            'create' => Pages\CreateAmenities::route('/create'),
            'edit' => Pages\EditAmenities::route('/{record}/edit'),
        ];
    }
}
