<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HotelRegistrationResource\Pages;
use App\Models\HotelRegistration;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
// use Filament\Forms\Components\Select;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Repeater;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\Toggle;
use Filament\Tables\Columns\BooleanColumn;

class HotelRegistrationResource extends Resource
{
    protected static ?string $model = HotelRegistration::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Hotel Management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // Hotel Name
                TextInput::make('hotel_name')
                    ->label('Hotel Name')
                    ->required()
                    ->maxLength(255),

                // Address
                Textarea::make('address')
                    ->label('Address')
                    ->maxLength(50) // Correctly using maxLength for Textarea
                    ->required(),

                // Coordinates (latitude and longitude)
                Grid::make(2)->schema([
                    TextInput::make('coordinates.latitude')
                        ->label('Latitude')
                        ->numeric()
                        ->nullable(),
                    TextInput::make('coordinates.longitude')
                        ->label('Longitude')
                        ->numeric()
                        ->nullable(),
                ]),

                // Description
                RichEditor::make('description')
                    ->label('Description')
                    ->nullable(),


                // City
                TextInput::make('city')
                    ->label('City')
                    ->nullable(),

                // Images (Outer, Hotel, and Room Images)
                Repeater::make('imgSrc')
                    ->label('Image Sources')
                    ->schema([
                        // Outer Images
                        Repeater::make('outer_images')
                            ->label('Outer Images')
                            ->schema([
                                FileUpload::make('image')
                                    ->label('Upload Image')
                                    ->image()
                                    ->required()
                                    ->maxSize(1024) // Maximum image size of 1MB
                                    ->directory('hotel-outer-images'),
                            ])
                            ->createItemButtonLabel('Add Outer Image'),

                        // Hotel Images
                        Repeater::make('hotel_images')
                            ->label('Hotel Images')
                            ->schema([
                                FileUpload::make('image')
                                    ->label('Upload Hotel Image')
                                    ->image()
                                    ->required()
                                    ->maxSize(1024)
                                    ->directory('hotel-images'),
                            ])
                            ->createItemButtonLabel('Add Hotel Image'),

                        // Room Images
                        Repeater::make('room_images')
                            ->label('Room Images')
                            ->schema([
                                FileUpload::make('image')
                                    ->label('Upload Room Image')
                                    ->image()
                                    ->required()
                                    ->maxSize(1024)
                                    ->directory('room-images'),
                            ])
                            ->createItemButtonLabel('Add Room Image'),
                    ])
                    ->required(),

                // Rooms (Repeater to handle multiple room types and pricing options)
                Repeater::make('rooms')
                    ->label('Rooms')
                    ->schema([
                        TextInput::make('roomeType')
                            ->label('Room Type')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('price')
                            ->label('Price')
                            ->numeric()
                            ->required(),


                        Select::make('type')
                            ->label('Type')
                            ->options([
                                'Room Only' => 'Room Only',
                                'Room With Breakfast' => 'Room With Breakfast',
                            ])
                            ->required(),

                        Select::make('Room Amenities')
                            ->multiple()
                            ->options([
                                'free_wifi' => 'Free Wi-Fi',
                                'breakfast_included' => 'Breakfast Included',
                                'free_cancellation' => 'Free Cancellation',
                                'parking' => 'Parking',
                                'air_conditioning' => 'Air Conditioning',
                                'tv' => 'TV',
                                'room_service' => 'Room Service',
                                'minibar' => 'Minibar',
                                'bathroom_essentials' => 'Free Toiletries',
                                'hairdryer' => 'Hairdryer',
                                'iron' => 'Iron',
                                'refrigerator' => 'Refrigerator',
                                'balcony' => 'Balcony',
                                'safety_deposit_box' => 'Safety Deposit Box',
                            ])
                            ->required(),


                        TextInput::make('final_price')
                            ->label('Final Price')
                            ->numeric()
                            ->required(),

                        Repeater::make('room_images')
                            ->label('Room Images')
                            ->schema([
                                FileUpload::make('image')
                                    ->label('Upload Room Image')
                                    ->image()
                                    ->required()
                                    ->maxSize(1024)
                                    ->directory('room-images'),
                            ])
                            ->createItemButtonLabel('Add Room Image'),

                    ]),



                // Features (like Wi-Fi, Gym, etc.)
                Select::make('Amenities')
                    ->label('Amenities')
                    ->multiple()
                    ->options([
                        'wifi' => 'Wi-Fi',
                        'gym' => 'Gym',
                        'pool' => 'Pool',
                        'parking' => 'Parking',
                        'air_conditioning' => 'Air Conditioning',
                        'restaurant' => 'Restaurant',
                        'breakfast_included' => 'Breakfast Included',
                        'room_service' => 'Room Service',
                        'laundry_service' => 'Laundry Service',
                        '24_hour_reception' => '24-Hour Reception',
                        'non_smoking_rooms' => 'Non-Smoking Rooms',
                        'elevator' => 'Elevator',
                        'concierge_service' => 'Concierge Service',
                        'free_breakfast' => 'Free Breakfast',
                        'family_rooms' => 'Family Rooms',
                        'accessible_rooms' => 'Accessible Rooms',
                        'airport_transfer' => 'Airport Transfer',
                        'high_speed_internet' => 'High-Speed Internet',
                    ])
                    ->required(),



                // Rating (could be a number from 0 to 5)
                TextInput::make('rating')
                    ->label('Rating')
                    ->numeric()
                    ->nullable(),


                Toggle::make('is_allowed_by_admin')
                    ->label('Allowed by Admin')
                    ->default(false)
                    ->onColor('success'),


                TextInput::make('price')
                    ->label('Price')
                    ->numeric()
                    ->required(),

                // Refund Policy
                RichEditor::make('refund_policy')
                    ->label('Refund Policy')
                    ->nullable(),

                // Privacy Policies
                RichEditor::make('privacy_policies')
                    ->label('Privacy Policies')
                    ->nullable(),

                // Social Media Links
                Repeater::make('contacts')
                    ->label('contacts')
                    ->schema([
                        Select::make('platform')
                            ->label('Platform')
                            ->options([
                                'numbar' => 'Number',
                                'mail' => 'Email',
                            ])
                            ->required(),
                        TextInput::make('Contact')
                            ->label('Contact')
                            ->required(),
                    ])
                    ->createItemButtonLabel('Add Social Media Link'),


                Repeater::make('social_media')
                    ->label('Social Media Links')
                    ->schema([
                        Select::make('platform')
                            ->label('Platform')
                            ->options([
                                'facebook' => 'Facebook',
                                'instagram' => 'Instagram',
                                'twitter' => 'Twitter',
                                'youtube' => 'YouTube',
                                'linkedin' => 'LinkedIn',
                                'hotel' => 'Hotel Website',
                            ])
                            ->required(),
                        TextInput::make('url')
                            ->label('URL')
                            ->url()
                            ->required(),
                    ])
                    ->createItemButtonLabel('Add Social Media Link'),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                TextColumn::make('s_no')
                    ->label('S.No.')
                    ->sortable(false)
                    ->getStateUsing(function ($record, $rowLoop) {
                        return $rowLoop->index + 1;
                    }),


                // Hotel Name
                TextColumn::make('hotel_name')->label('Hotel Name')->sortable()->searchable(),

                // City
                TextColumn::make('city')->label('City')->sortable(),

                // Rating
                TextColumn::make('rating')->label('Rating')->sortable(),

                // Address
                TextColumn::make('address')->label('Address')->sortable(),

                // Price
                TextColumn::make('price')->label('Price')->sortable(),

                // Outer Image (Display first image in the outer_images array)
                ImageColumn::make('imgSrc.0.outer_images.0.image')
                    ->label('Outer Image')
                    ->sortable()
                    ->width(100)
                    ->height(100),

                // Hotel Image (Display first image in the hotel_images array)
                ImageColumn::make('imgSrc.0.hotel_images.0.image')
                    ->label('Hotel Image')
                    ->sortable()
                    ->width(100)
                    ->height(100),

                // Room Image (Display first image in the room_images array)
                ImageColumn::make('imgSrc.0.room_images.0.image')
                    ->label('Room Image')
                    ->sortable()
                    ->width(100)
                    ->height(100),

                // Rooms (Show first room type and price)
                TextColumn::make('rooms.0.roomeType')
                    ->label('Room Type')
                    ->sortable(),
                TextColumn::make('rooms.0.price')
                    ->label('Room Price')
                    ->sortable(),
                TextColumn::make('rooms.0.final_price')
                    ->label('Final Room Price')
                    ->sortable(),

                // Amenities (Show list of amenities, comma-separated)
                TextColumn::make('Amenities')
                    ->label('Amenities')
                    ->sortable()
                    ->getStateUsing(function ($record) {
                        return implode(', ', $record->Amenities);
                    }),

                // Contacts (Show first contact number and platform)
                TextColumn::make('contacts.0.Contact')
                    ->label('Contact Number')
                    ->sortable(),
                TextColumn::make('contacts.0.platform')
                    ->label('Contact Platform')
                    ->sortable(),

                // Social Media (Show first social media link and platform)
                TextColumn::make('social_media.0.url')
                    ->label('Social Media URL')
                    ->sortable(),
                TextColumn::make('social_media.0.platform')
                    ->label('Social Media Platform')
                    ->sortable(),

                // Refund Policy (Text)
                // TextColumn::make('refund_policy')->label('Refund Policy')->sortable(),

                // Privacy Policy (Text)
                // TextColumn::make('privacy_policies')->label('Privacy Policy')->sortable(),
            ])
            ->filters([
                // You can add filters for city, rating, or any other fields
                // TextFilter::make('city')
                //     ->label('Filter by City'),
                // NumberFilter::make('rating')
                //     ->label('Filter by Rating')
                //     ->range(),
            ]);
    }


    public static function getPages(): array
    {
        return [
            'index' => Pages\ListHotelRegistrations::route('/'),
            'create' => Pages\CreateHotelRegistration::route('/create'),
            'edit' => Pages\EditHotelRegistration::route('/{record}/edit'),
        ];
    }
}
