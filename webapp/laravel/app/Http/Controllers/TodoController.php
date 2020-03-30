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

    public function show($id) {
        $name = Todo::where('userID', $id)->get();
        return response()->json($name, 200);
    }

    public function delete(Request $request) {
        $todo = Todo::where('id', $request[0])->delete();
        return response()->json($request[0], 200);
    }
}
