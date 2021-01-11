<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaypalController;
use App\Http\Controllers\ProductController;

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

// Route::pattern('path', '[a-zA-Z0-9-/]+');
// Route::any('{path}', function ($page) {
//     return view('index');
// });
Route::get('/', [ProductController::class, 'index'])->name('index');
Route::get('/products', [ProductController::class, 'display']);
Route::get('/product/{product}', [ProductController::class, 'show'])->name('product.show');

Route::get('/cart', [CartController::class, 'index']);
Route::get('/cart/add-item/{id}', [CartController::class, 'add'])->name('cart.add');
Route::get('/cart/destroy/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
Route::get('/cart/checkout', [CartController::class, 'checkout'])->name('cart.checkout')->middleware('auth');

Route::post('/order/create', [OrderController::class, 'newOrder'])->name('order.create')->middleware('auth');


Route::group(['prefix' => 'paypal'], function () {
    Route::get('/checkout/{orderId}', [PaypalController::class, 'checkout'])->name('paypal.checkout')->middleware('auth');
    Route::get('/success/{orderId}', [PaypalController::class, 'getExpressCheckoutSuccess'])->name('paypal.success');

});
/* Display username in navbar */
Route::get('/user-name', [HomeController::class, 'isAuth']);

/* Logout username from navbar */
Route::get('/log-out', [LoginController::class, 'logout']);

/* Facebook Login */
route::get('/sign-in/facebook', [LoginController::class, 'facebookLogin'])->name('sign-in.facebook');
route::get('/sign-in/facebook/redirect', [LoginController::class, 'facebookRedirect']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
