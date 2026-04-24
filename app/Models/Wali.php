<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wali extends Model
{
    protected $table = 'walis';
    protected $fillable = [
        'name',
        'student_id',
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
