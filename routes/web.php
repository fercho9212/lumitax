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

Route::get('/', function () {
    return redirect('/login');
});

Auth::routes();

Route::get('/dashboard', 'PanelController@index');

Route::get('/frm_create_driver', 'Dashboard\FormsController@frm_create_driver');
Route::get('/frm_create_passenger', 'Dashboard\FormsController@frm_create_passenger');

Route::resource('/driver', 'Dashboard\DriversController');
Route::resource('/passenger', 'Dashboard\PassengersController');
