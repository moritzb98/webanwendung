<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function getUser()
    {
        $users = User::all();
        $response = [
            'users' => $users
        ];

        return response()->json($response, 200);
    }
}
