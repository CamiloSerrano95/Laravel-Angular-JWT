<?php

namespace App\Http\Controllers;

use App\Client;
use Illuminate\Http\Request;
use App\Http\Requests\Client\CreateClientRequest;
use App\Http\Requests\Client\UpdateClientRequest;

class ClientController extends Controller
{
    public function all() {
        $clients = Client::all();

        $response = [
            'success' => 1,
            'data' => $clients
        ];

        return response()->json($response, 200);
    }
    
    public function store(CreateClientRequest $request) {

        $data = [
            'names'          => $request->name, 
            'identification' => $request->identificatio, 
            'telephone'      => $request->telephone,
            'address'        => $request->address,
            'email'          => $request->email 
        ];

        $new = Client::insert($data);

        return response()->json(['success' => 1, 'status' => $new, 'msg' => 'Cliente agregado exitosamente'], 200);
    }

    public function getById($id) {
        $client = Client::find($id);

        $response = [
            'success' => 1,
            'data'    => $client
        ];

        return response()->json($response, 200);
    }

    public function update($id, UpdateClientRequest $request) {

        $data = [
            'names'          => $request->name, 
            'identification' => $request->identificatio, 
            'telephone'      => $request->telephone,
            'address'        => $request->address,
            'email'          => $request->email 
        ];

        $update = Client::find($id)->update($data);


        return response()->json(['success' => 1, 'status' => $update, 'msg' => 'Cliente actualizado exitosamente'], 200);
    }

    public function delete($id) {
        $delete = Client::find($id)->delete();
        return response()->json(['success' => 1, 'status' => $delete, 'msg' => 'Cliente eliminado exitosamente'], 200);
    }
}
