<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191); // без это записий не работает миграция

        //прослушивание - как только будет выполняться любой sql запрос - метод listen вызовет на исполнение эту функцию
        /*DB::listen(function ($query){
            dump($query->sql);
//            dump($query->bindings);
        });*/
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
