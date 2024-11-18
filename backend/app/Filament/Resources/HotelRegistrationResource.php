<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HotelRegistrationResource\Pages;
use App\Models\HotelRegistration;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class HotelRegistrationResource extends Resource
{
    protected static ?string $model = HotelRegistration::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Hotel Management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('hotel_name')
                    ->required()
                    ->maxLength(255)
                    ->label('Hotel Name'),
                Forms\Components\Textarea::make('address')
                    ->required()
                    ->label('Address'),
                Forms\Components\TextInput::make('latitude')
                    ->numeric()
                    ->label('Latitude'),
                Forms\Components\TextInput::make('longitude')
                    ->numeric()
                    ->label('Longitude'),
                Forms\Components\FileUpload::make('pictures')
                    ->label('Pictures')
                    ->multiple()
                    ->directory('hotel_pictures')
                    ->required(),
                Forms\Components\KeyValue::make('packages')
                    ->label('Packages (Weekdays and Weekends)')
                    ->keyLabel('Package Type')
                    ->valueLabel('Details (e.g., {"days": "Mon-Fri", "price": 100})'),
                Forms\Components\Toggle::make('is_allowed_by_admin')
                    ->label('Approved by Admin'),
                Forms\Components\TextInput::make('commission')
                    ->numeric()
                    ->label('Commission (%)'),
                Forms\Components\KeyValue::make('features')
                    ->label('Features')
                    ->keyLabel('Feature')
                    ->valueLabel('Description'),
                Forms\Components\Textarea::make('description')
                    ->label('Description')
                    ->rows(4),
                Forms\Components\Textarea::make('extra_info')
                    ->label('Extra Information'),
                Forms\Components\Textarea::make('refund_policy')
                    ->label('Refund Policy'),
                Forms\Components\Textarea::make('privacy_policies')
                    ->label('Privacy Policy'),
                Forms\Components\KeyValue::make('social_media_links')
                    ->label('Social Media Links')
                    ->keyLabel('Platform')
                    ->valueLabel('Link'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('hotel_name')
                    ->label('Hotel Name')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('address')
                    ->label('Address')
                    ->limit(50),
                Tables\Columns\ToggleColumn::make('is_allowed_by_admin')
                    ->label('Admin Approved'),
                Tables\Columns\TextColumn::make('commission')
                    ->label('Commission (%)'),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Created At')
                    ->dateTime('d M Y H:i'),
            ])
            ->filters([
                Tables\Filters\Filter::make('approved')
                    ->query(fn ($query) => $query->where('is_allowed_by_admin', true))
                    ->label('Approved by Admin'),
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

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListHotelRegistrations::route('/'),
            'create' => Pages\CreateHotelRegistration::route('/create'),
            'edit' => Pages\EditHotelRegistration::route('/{record}/edit'),
        ];
    }
}
