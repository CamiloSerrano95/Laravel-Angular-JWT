<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
|    Route::middleware('auth:api')->get('/user', function (Request $request) {
|        return $request->user();
|    });
*/

Route::post('register', 'UserController@store');
Route::post('login', 'AuthenticationController@authenticate');

Route::group(['middleware' => ['jwt.verify']], function() {

    Route::post('userauth', 'AuthenticationController@getAuthenticatedUser');
    Route::post('logout', 'AuthenticationController@logout');

    /* Routes for users  */
    Route::get('user/all', 'UserController@all');
    Route::post('user/store', 'UserController@store');
    Route::get('user/getById/{id}', 'UserController@getById');
    Route::post('user/update/{id}', 'UserController@update');
    Route::get('user/delete/{id}', 'UserController@delete');

    /* Routes for clients  */
    Route::get('client/all', 'ClientController@all');
    Route::post('client/store', 'ClientController@store');
    Route::get('client/getById/{id}', 'ClientController@getById');
    Route::post('client/update/{id}', 'ClientController@update');
    Route::get('client/delete/{id}', 'ClientController@delete');
});