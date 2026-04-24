<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentRequest;
use App\Models\Grade;
use App\Models\Student;

class StudentsController extends Controller
{
    public function index() {        
        $datas = Student::with(['grade', 'wali'])->orderBy('grade_id', 'asc')->get();        
        // dd($datas);
        $groupData = $datas->groupBy('grade.name')->values()->toArray(); 

        return Inertia('Student/Index', [
            'datas' => $datas,
            'groupData' => $groupData
        ]);
    }

    public function create() {
        $options = Grade::get();

        return Inertia('Student/Create', [
            'options' => $options
        ]);
    }

    public function store(StudentRequest $request) 
    {        
        $student = Student::create([
            'name' => $request->name,
            'grade_id' => $request->grade_id
        ]);

        if(!$student) {
            return redirect()->route('student.index')->with('error', 'Data gagal Ditambahkan!');
        }

        return redirect()->route('student.index')->with('success', 'Data Berhasil Disimpan!');
    }

    public function edit(Student $student)
    {
        $options = Grade::get();

        return inertia('Student/Edit', [
            'data' => $student,
            'options' => $options
        ]);
    }

    public function update(StudentRequest $request, Student $student)
    {
        $updated = $student->update([
            'name' => $request->name,
            'grade_id' => $request->grade_id
        ]);

        if(!$updated) {
            return redirect()->route('student.index')->with('error', 'Data gagal Diupdate!');
        }

        return redirect()->route('student.index')->with('success', 'Data Berhasil Diupdate!');
    }

    public function destroy(Student $student)
    {
        $deleted = $student->delete();

        if(!$deleted) {
            return redirect()->route('student.index')->with('error', 'Data gagal Dihapus!');
        }

        return redirect()->route('student.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
