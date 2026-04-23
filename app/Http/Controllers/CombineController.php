<?php

namespace App\Http\Controllers;

use App\Models\Grade;

class CombineController extends Controller
{
    public function index()
    {
        $GradeDatas = Grade::with([
            'students',
            'teachers',
    ])->get();

        return Inertia('Combined/Index', [            
            'datas' => $GradeDatas
        ]);
    }
}
