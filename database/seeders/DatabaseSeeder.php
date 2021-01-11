<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use App\Models\UserProduct;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

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
            'name' => 'Fer Toastillo',
            'email' => 'user@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make(123456), // password
            'remember_token' => Str::random(10),
        ));
        User::factory(10)->create();

        Product::factory(10)->create();
        UserProduct::factory(10)->create();
    }
}
