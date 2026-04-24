<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateGradeRequest;
use App\Models\Grade;
use Illuminate\Support\Facades\Log;

class GradeController extends Controller
{

    public function index() {        
        $datas = Grade::get();
        Log::info($datas);

        return Inertia('Grade/Index', [
            'datas' => $datas,
        ]);
    }

    public function create() {
        return Inertia('Grade/Create');
    }

    public function store(CreateGradeRequest $request) {        

        $grade = Grade::create([
            'name' => $request->name,
        ]);

        if(!$grade) {
            return redirect()->route('grade.index')->with('error', 'Data gagal Ditambahkan!');
        }

        return redirect()->route('grade.index')->with('success', 'Data Berhasil Disimpan!');
    }

    public function edit(Grade $grade)
    {
        // dd($grade->name);
        return inertia('Grade/Edit', [
            'data' => $grade,
        ]);
    }

    public function update(CreateGradeRequest $request, Grade $grade)
    {
        $updated = $grade->update([
            'name' => $request->name,
        ]);

        if(!$updated) {
            return redirect()->route('grade.index')->with('error', 'Data gagal Diupdate!');
        }

        return redirect()->route('grade.index')->with('success', 'Data Berhasil Diupdate!');
    }

    public function destroy(Grade $grade)
    {
        $deleted = $grade->delete();

        if(!$deleted) {
            return redirect()->route('grade.index')->with('error', 'Data gagal Dihapus!');
        }

        return redirect()->route('grade.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
