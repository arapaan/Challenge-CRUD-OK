<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeacherRequest;
use App\Models\Grade;
use App\Models\Teacher;

class TeachersController extends Controller
{
    public function index() {        
        $datas = Teacher::with('grade')->orderBy('grade_id', 'asc')->get();        
        $groupData = $datas->groupBy('grade.name')->values()->toArray();

        return Inertia('Teacher/Index', [
            'datas' => $datas,
            'groupData' => $groupData
        ]);
    }

    public function create() {
        $options = Grade::get();

        return Inertia('Teacher/Create', [
            'options' => $options
        ]);
    }

    public function store(TeacherRequest $request) 
    {        
        $teacher = Teacher::create([
            'name' => $request->name,
            'grade_id' => $request->grade_id
        ]);

        if(!$teacher) {
            return redirect()->route('teacher.index')->with('error', 'Data gagal Ditambahkan!');
        }

        return redirect()->route('teacher.index')->with('success', 'Data Berhasil Disimpan!');
    }

    public function edit(Teacher $teacher)
    {
        $options = Grade::get();

        return inertia('Teacher/Edit', [
            'data' => $teacher,
            'options' => $options
        ]);
    }

    public function update(TeacherRequest $request, Teacher $teacher)
    {
        $teacher->update([
            'name' => $request->name,
            'grade_id' => $request->grade_id
        ]);

        if(!$teacher) {
            return redirect()->route('teacher.index')->with('error', 'Data gagal Diupdate!');
        }

        return redirect()->route('teacher.index')->with('success', 'Data Berhasil Diupdate!');
    }

    public function destroy(Teacher $teacher)
    {
        $teacher->delete();

        if(!$teacher) {
            return redirect()->route('teacher.index')->with('error', 'Data gagal Dihapus!');
        }

        return redirect()->route('teacher.index')->with('success', 'Data Berhasil Diupdate!');
    }
}
