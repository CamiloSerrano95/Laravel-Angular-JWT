<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(
            [
                'name'     => 'Camilo Serrano',
                'email'    => 'admin@admin.com',
                'password' => Hash::make('123456')
            ]
        );
    }
}
