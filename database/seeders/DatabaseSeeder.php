<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(array(
            'id' => 1,
            'name' => 'Fer Toasted',
            'email' => 'esponges@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make(123456), // password
            'remember_token' => Str::random(10),
        ));
        User::factory(10)->create();

        Product::factory(10)->create();
    }
}
