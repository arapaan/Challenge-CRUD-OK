<?php

namespace App\Http\Controllers;

use App\Http\Requests\WaliRequest;
use App\Models\Student;
use App\Models\Wali;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WaliController extends Controller
{
    public function index()
    {
        $datas = Wali::get();

        return Inertia('Wali/Index', [
            'datas' => $datas
        ]);
    }

    public function create()
    {
        $options = Student::get();

        return Inertia('Wali/Create', [
            'options' => $options
        ]);
    }

    public function store(WaliRequest $request)
    {
        $result = Wali::create([
            'name' => $request->name,
            'student_id' => $request->student_id,
        ]);

        if(!$result) {
            return redirect()->route('wali.index')->with('success', 'Data Gagal Disimpan!');
        }

        return redirect()->route('wali.index')->with('success', 'Data Berhasil Disimpan!');
    }

    public function edit(Wali $wali)
    {
        $options = Student::get();

        return Inertia('Wali/Edit', [
            'data' => $wali,
            'options' => $options
        ]);
    }

    public function update(WaliRequest $request, Wali $wali)
    {
        $updated = $wali->update([
            'name' => $request->name,
            'student_id' => $request->student_id
        ]);

        if(!$updated) {
            return redirect()->route('wali.index')->with('success', 'Data Gagal Diupdate!');
        }

        return redirect()->route('wali.index')->with('success', 'Data Berhasil Diupdate!');
    }

    public function destroy(Wali $wali)
    {
        $deleted = $wali->delete();

        if(!$deleted) {
            return redirect()->route('wali.index')->with('error', 'Data gagal Dihapus!');
        }

        return redirect()->route('wali.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
