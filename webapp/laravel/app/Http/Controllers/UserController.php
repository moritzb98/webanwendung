<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use JWTAuth;

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

    
    public function getCurrentUser()
    {
        $currentUser = AuthController::me();

        return response()->json($currentUser, 200);
    }
}
