<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Cache;
use Statamic\Events\EntrySaved;
use Statamic\Events\NavTreeSaved;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        Event::listen(function (NavTreeSaved $event) {
            // Whenever a nav is updated, we bust the cache for it.
            // Statamic navs are expensive to render.
            Cache::flush();
        });

        Event::listen(function (EntrySaved $event) {
            // Whenever an entry is saved, we bust the 'nav' cache.
            // This is because all entries that have a url (route/page) have an option to change the logo in the primary nav.
            // If the logo is changed, we need to bust the cache so the new logo is shown.
            if ($event->entry->url()) {
                Cache::flush();
            }
        });
    }
}
