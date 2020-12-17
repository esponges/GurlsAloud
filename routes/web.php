<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
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

Route::get('/', [ProductController::class, 'index']);
Route::get('/products', [ProductController::class, 'display']);
Route::get('/product/{product}', [ProductController::class, 'show'])->name('product.show');

Route::get('/cart', [CartController::class, 'index']);
Route::get('/cart/add-item/{id}', [CartController::class, 'add'])->name('cart.add');
Route::get('/cart/destroy/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
Route::get('/cart/checkout', [CartController::class, 'checkout'])->name('cart.checkout')->middleware('auth');

Route::post('order/create', [OrderController::class, 'newOrder'])->name('order.create')->middleware('auth');

Route::get('/paypal/checkout/{id}', [PaypalController::class, 'checkout'])->name('paypal.checkout')->middleware('auth');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');