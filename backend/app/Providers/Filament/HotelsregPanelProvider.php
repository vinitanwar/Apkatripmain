<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
<<<<<<<< HEAD:backend/app/Providers/Filament/HotelsPanelProvider.php

class HotelsPanelProvider extends PanelProvider
========
use App\Filament\Auth\HotelLogin;
class HotelsregPanelProvider extends PanelProvider
>>>>>>>> b7a0479ea4aebfeccd3d6d3eb10f8008829fafdf:backend/app/Providers/Filament/HotelsregPanelProvider.php
{
    public function panel(Panel $panel): Panel
    {
        return $panel
<<<<<<<< HEAD:backend/app/Providers/Filament/HotelsPanelProvider.php
            ->id('hotels')
            ->path('hotels')
            ->login()
            ->colors([
                'primary' => Color::Green,
                'danger' => Color::Red,
                'gray' => Color::Zinc,
                'info' => Color::Blue,
                'primary' => Color::Amber,
                'success' => Color::Green,
                'warning' => Color::Amber,
            ])
            ->discoverResources(in: app_path('Filament/Hotels/Resources'), for: 'App\\Filament\\Hotels\\Resources')
            ->discoverPages(in: app_path('Filament/Hotels/Pages'), for: 'App\\Filament\\Hotels\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Hotels/Widgets'), for: 'App\\Filament\\Hotels\\Widgets')
========
            ->id('hotelsreg')
            ->path('hotelsreg')
            ->login(HotelLogin::class)
            ->colors([
                'danger' => Color::Rose, // Changed from Red to Rose
                'gray' => Color::Slate,
                'info' => Color::Blue,
                'primary' => Color::Violet,
                'success' => Color::Emerald,
                'warning' => Color::Orange,
            ])
            
            ->discoverResources(in: app_path('Filament/Hotelsreg/Resources'), for: 'App\\Filament\\Hotelsreg\\Resources')
            ->discoverPages(in: app_path('Filament/Hotelsreg/Pages'), for: 'App\\Filament\\Hotelsreg\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Hotelsreg/Widgets'), for: 'App\\Filament\\Hotelsreg\\Widgets')
>>>>>>>> b7a0479ea4aebfeccd3d6d3eb10f8008829fafdf:backend/app/Providers/Filament/HotelsregPanelProvider.php
            ->widgets([
                Widgets\AccountWidget::class,
                Widgets\FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
