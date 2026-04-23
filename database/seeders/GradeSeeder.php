<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('grades')->insert([
            [
                'id' => 1,
                'name' => 'RPL 1'
            ],
            [
                'id' => 2,
                'name' => 'RPL 2'
            ],
            [
                'id' => 3,
                'name' => 'RPL 3'
            ],
            [
                'id' => 4,
                'name' => 'RPL 4'
            ],
        ]);
    }
}
