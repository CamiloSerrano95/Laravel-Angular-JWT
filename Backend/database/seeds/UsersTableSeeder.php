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
                'password' => Hash::make('123456'),
                'role'     => 'admin'
            ]
        );

        User::create(
            [
                'name'     => 'User Client',
                'email'    => 'client@client.com',
                'password' => Hash::make('123456'),
                'role'     => 'seller'
            ]
        );
    }
}
