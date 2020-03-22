<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', 'UserController@getUser');
Route::get('/currentUser', 'UserController@getCurrentUser');

Route::group([

    'middleware' => 'api',

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');

});

Route::post('createEvent', 'EventController@create');
Route::get('events', 'EventController@show');
Route::post('delEvents', 'EventController@delete');

Route::post('/pimg/id', 'ImageController@index');
Route::post('pimg', 'ImageController@store');
Route::get('getpimg/{id}', 'ImageController@show');
