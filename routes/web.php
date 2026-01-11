<?php

use Illuminate\Support\Facades\Route;

/**
 * SPA entry (React)
 */
Route::view('/', 'app')->name('app.root');

// Opcional (deixa bem claro que /home é SPA)
Route::view('/home', 'app')->name('home');

/**
 * Catch-all SPA (React Router)
 * Deixe sempre por ÚLTIMO.
 */
Route::view('/{any}', 'app')->where('any', '.*')->name('app');
