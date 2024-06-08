<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Test');
// });

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'greeting' => 'Hello'
    ]);
})->name('welcome');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/user', [UserController::class, 'index'])
    ->name('user');