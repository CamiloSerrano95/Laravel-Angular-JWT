<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function all() {
        $users = User::all();

        $response = [
            'success' => 1,
            'data' => $users
        ];

        return response()->json($response, 200);
    }

    public function store(CreateUserRequest $request) {

        $data = [
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password)
        ];

        $new = User::insert($data);

        return response()->json(['success' => 1, 'status' => $new, 'msg' => 'Usuario agregado exitosamente'], 200);
    }

    public function getById($id) {
        $user = User::find($id);

        $response = [
            'success' => 1,
            'data'    => $user
        ];

        return response()->json($response, 200);
    }

    public function update($id, UpdateUserRequest $request) {

        $data = [
            'name'  => $request->name,
            'email' => $request->email
        ];

        $update = User::find($id)->update($data);


        return response()->json(['success' => 1, 'status' => $update, 'msg' => 'Usuario actualizado exitosamente'], 200);
    }

    public function delete($id) {
        $delete = User::find($id)->delete();
        return response()->json(['success' => 1, 'status' => $delete, 'msg' => 'Usuario eliminado exitosamente'], 200);
    }
}
