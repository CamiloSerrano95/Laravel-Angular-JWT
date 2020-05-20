<?php

use App\Client;
use Illuminate\Database\Seeder;

class ClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Client::create(
            [
                'names'     => 'Fabio Serrano',
                'identification' => '123456',
                'telephone' => '3004568547',
                'address'   => 'Cll 38 #2-14 apto 202',
                'email'     => 'fabio@client.com'
            ]
        );

        Client::create(
            [
                'names'     => 'Anto Serrano',
                'identification' => '123458',
                'telephone' => '3004568548',
                'address'   => 'Cll 38 #2-14 apto 202',
                'email'     => 'anto@client.com'
            ]
        );
    }
}
