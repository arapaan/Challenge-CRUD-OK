<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('teachers')->insert([
            [
                'name' => 'Joko',
                'grade_id' => 1
            ],
            [
                'name' => 'Sutono',
                'grade_id' => 1
            ],
            [
                'name' => 'Sutrisno',
                'grade_id' => 1
            ],
            [
                'name' => 'Diah',
                'grade_id' => 2
            ],
            [
                'name' => 'Sri',
                'grade_id' => 2
            ],
            [
                'name' => 'Agus',
                'grade_id' => 2
            ],
            [
                'name' => 'Jiah',
                'grade_id' => 3
            ],
            [
                'name' => 'Ian',
                'grade_id' => 3
            ],
            [
                'name' => 'Bian',
                'grade_id' => 3
            ],
        ]);
    }
}
