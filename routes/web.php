<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', ['as' => 'main', 'uses' => 'ContactController@show']);
Route::post('/', ['as' => 'main', 'uses' => 'ContactController@store']);
Route::get('/about', ['as' => 'about', function () {
    return view('pages.about');
}]);
Route::get('/reviews', ['as' => 'reviews', function () {
    return view('pages.reviews');
}]);
Route::get('/services', ['as' => 'services', 'uses' => 'ServicesController@getServices']);
Route::get('/portfolio', ['as' => 'portfolio', function () {
    return view('pages.portfolio');
}]);
//Route::get('/vacancies', ['as' => 'vacancies', 'uses' => 'VacancyController@show']);
//Route::post('/vacancies', ['as' => 'vacancies', 'uses' => 'VacancyController@store']);
Route::get('/contact', ['as' => 'contact', function () {
    return view('pages.contact');
}]);

Route::get('/thanks', ['as' => 'thanks', function () {
    return view('pages.thanks');
}]);
Route::get('/ops', ['as' => 'ops', function () {
    return view('errors.ops');
}]);

//Route::get('/home', 'HomeController@index')->name('home');
//
//Auth::routes();
//
//Route::get('/contact', [
//    'uses' => 'MyContactController@index',
//    'middleware' => ['web', 'auth']])->name('contact');
//
////Route::get('/login', ['uses' => 'Auth\MyAuthController@showLoginForm'])->name('login');
////Route::post('/login', ['uses' => 'Auth\MyAuthController@authenticate']);
//Route::get('/', function () {
//    return view('test');
//}
//);
//Route::get('/test', ['uses' => 'MyContactController@test']);