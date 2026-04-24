<?php

namespace Database\Seeders;

use App\Models\Student;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WaliSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('walis')->insert([
            [
                'name' => 'yanto',
                'student_id' => 1
            ],
            [
                'name' => 'Ari',
                'student_id' => 2
            ],
            [
                'name' => 'Gian',
                'student_id' => 3
            ],
        ]);
    }
}
