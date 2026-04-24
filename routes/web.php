<?php

use App\Http\Controllers\CombineController;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentsController;
use App\Http\Controllers\TeachersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');    
    
    Route::resource('grade', GradeController::class);
    Route::resource('student', StudentsController::class);
    Route::resource('teacher', TeachersController::class);
    Route::get('combine', [CombineController::class, 'index'])->name('combine.index');
});

require __DIR__.'/auth.php';
