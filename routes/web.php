<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SearchboxController;

/**
 * SPA entry (React)
 */
Route::view('/', 'app')->name('app.root');

// Opcional (deixa bem claro que /home é SPA)
Route::view('/home', 'app')->name('home');

/**
 * Endpoint pro front puxar as opções do SearchBox
 * (tem que ficar ANTES do catch-all)
 */
Route::get('/searchbox/options', [SearchboxController::class, 'options'])
    ->name('searchbox.options');

/**
 * Catch-all SPA (React Router)
 * Deixe sempre por ÚLTIMO. CIRO NETO
 */
Route::view('/{any}', 'app')->where('any', '.*')->name('app');
