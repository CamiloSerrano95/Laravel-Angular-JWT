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

Route::post('register', 'AuthenticationControllerController@register');
Route::post('login', 'AuthenticationController@authenticate');
Route::post('userauth', 'AuthenticationController@getAuthenticatedUser');

Route::group(['middleware' => ['jwt.verify']], function() {

    /* Routes for users  */
    Route::get('user/all', 'UserController@all');
    Route::post('user/store', 'UserController@store');
    Route::get('user/getById/{id}', 'UserController@getById');
    Route::post('user/update/{id}', 'UserController@update');
    Route::get('user/delete/{id}', 'UserController@delete');
});