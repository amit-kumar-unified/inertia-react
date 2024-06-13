<?php

use App\Http\Controllers\Auth\{LoginController, RegisterController};
use App\Http\Controllers\{DashboardController, FolderController};
use Illuminate\Support\Facades\Route;


Route::middleware('guest')->group(function(){

    Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
    Route::post('login', [LoginController::class, 'login']);

    Route::get('register', [RegisterController::class, 'showRegisterForm'])->name('register');
    Route::post('register', [RegisterController::class, 'register']);

});

Route::middleware('auth')->group(function(){
    Route::get("/{folder_id?}", [DashboardController::class, 'showDashboard'])->name('dashboard');


    Route::post('new-folder-create', [FolderController::class, 'createNewFolder'])->name('new-folder-create');
});
