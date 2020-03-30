<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodoController extends Controller
{
    public function create(Request $request)
    {
        Todo::create($request->all());
        return response()->json($request, 201);
    }
}
