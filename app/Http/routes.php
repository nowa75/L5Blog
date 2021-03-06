<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*
|--------------------------------------------------------------------------
| Authenticate
|--------------------------------------------------------------------------
*/
Route::controllers( [
    'auth'     => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
] );


/*
|--------------------------------------------------------------------------
| Static page
|--------------------------------------------------------------------------
*/
Route::get( 'about', 'PagesController@about' );
Route::get( 'contact', [ 'middleware' => 'auth', 'uses' => 'PagesController@contact' ] );

/*
|--------------------------------------------------------------------------
| Articles
|--------------------------------------------------------------------------
*/
Route::resource( 'articles', 'ArticlesController' );
Route::resource( 'tags', 'TagsController' );
Route::resource( 'items', 'ItemsController' );

//Route::get( 'articles', 'ArticlesController@index' );
//Route::get( 'articles/create', 'ArticlesController@create' );
//Route::get( 'articles/{id}', 'ArticlesController@show' );
//Route::post( 'articles', 'ArticlesController@store' );
//Route::get('articles/{id}/edit', 'ArticlesController@edit');


// middleware "manager" defined in Kernel.php: 'manager' => 'App\Http\Middleware\RedirectIfNotAManager'
Route::get( 'foo', [ 'middleware' => 'manager', 'uses' => 'FooController@foo' ] );