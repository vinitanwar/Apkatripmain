<?php

namespace App\Filament\Hotelreg\Resources;

use App\Filament\Hotelreg\Resources\RoomregResource\Pages;
use App\Filament\Hotelreg\Resources\RoomregResource\RelationManagers;
use App\Models\Roomreg;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\ImageColumn;








class RoomregResource extends Resource
{
    protected static ?string $model = Roomreg::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // Room Type Field
                Forms\Components\TextInput::make('room_type')
                    ->required()
                    ->label('Room Type'),

                // Room Size Field
                Forms\Components\TextInput::make('size')
                    ->required()
                    ->label('Room Size'),

                // Bed Type Field
                Forms\Components\TextInput::make('bed_type')
                    ->required()
                    ->label('Bed Type'),

                // Price Field
                Forms\Components\TextInput::make('price')
                    ->required()
                    ->label('Price')
                    ->numeric(),

                // Max Occupancy Field
                Forms\Components\TextInput::make('max_occupancy')
                    ->required()
                    ->label('Max Occupancy')
                    ->numeric(),

                // Room Availability (String)
                Forms\Components\TextInput::make('room_ava')
                    ->required()
                    ->label('Room Availability')
                    ->placeholder('e.g., Available, Booked, Under Maintenance')
                    ->maxLength(100),

                // Room Features (Multi-Select for Amenities)
                Forms\Components\Select::make('features')
                    ->multiple()
                    ->options([
                        'Wifi' => 'Wifi',
                        'AC' => 'AC',
                        'Breakfast' => 'Breakfast',
                        'Pool' => 'Pool',
                        'Gym' => 'Gym',
                        'Parking' => 'Parking',
                        'Spa' => 'Spa',
                        // Add more features as needed
                    ])
                    ->label('Room Features'),

                // Room Description (TextArea for multiline text)
                Forms\Components\TextArea::make('room_des')
                    ->required()
                    ->label('Room Description')
                    ->placeholder('Describe the room in detail'),

                // Additional Services (TextArea)
                Forms\Components\TextArea::make('additional_serv')
                    ->label('Additional Services')
                    ->placeholder('Optional services offered with the room'),

                // Room Images (Multiple file upload)0
                Forms\Components\FileUpload::make('image')
                    ->multiple()
                    ->image()
                    ->label('Room Images')
                    ->directory('room-images')
                    ->preserveFilenames(),
            ]);
    }


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                ImageColumn::make('image'),
                TextColumn::make('room_type'),
                TextColumn::make('size'),
                TextColumn::make('bed_type'),
                TextColumn::make('price'),
                TextColumn::make('max_occupancy'),
                TextColumn::make('room_ava'),
                TextColumn::make('features'),
            
                TextColumn::make('room_des'),
                TextColumn::make('additional_serv'),
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
            'index' => Pages\ListRoomregs::route('/'),
            'create' => Pages\CreateRoomreg::route('/create'),
            'edit' => Pages\EditRoomreg::route('/{record}/edit'),
        ];
    }
}
