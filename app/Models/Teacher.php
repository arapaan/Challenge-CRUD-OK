<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    protected $fillable = [
        'name',
        'grade_id',
    ];

    public function grade() {
        return $this->belongsTo(Grade::class);
    }
}
