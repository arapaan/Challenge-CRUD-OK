<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('students')->insert([
            [
                'name'      => 'Budi',
                'grade_id'  => 1,
            ],
            [
                'name'      => 'Rian',
                'grade_id'  => 1,
            ],
            [
                'name'      => 'Kevin',
                'grade_id'  => 1,
            ],
            [
                'name'      => 'Ari',
                'grade_id'  => 2,
            ],
            [
                'name'      => 'Fana',
                'grade_id'  => 2,
            ],
            [
                'name'      => 'Lai',
                'grade_id'  => 2,
            ],
            [
                'name'      => 'Rani',
                'grade_id'  => 3,
            ],
            [
                'name'      => 'Dian',
                'grade_id'  => 3,
            ],
            [
                'name'      => 'Putra',
                'grade_id'  => 3,
            ],
        ]);
    }
}
