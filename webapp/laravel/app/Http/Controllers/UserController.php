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

    
    public static function getCurrentUser()
    {
        $currentUser = AuthController::me();

        return response()->json($currentUser, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show ($id)
    {
        $surname = User::where('id', $id)->first('surname');
        $alter = User::where('id', $id)->first('alter');
        $wohnort = User::where('id', $id)->first('wohnort');
        $data = [
            'surname' => $surname,
            'alter' => $alter,
            'wohnort' => $wohnort
        ];
        return response()->json($data, 200);
    }
}
