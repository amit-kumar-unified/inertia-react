<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function showLoginForm(){

        return Inertia::render('Authentication/LoginPage');

    }

    public function login(Request $request){

        $request->validate([
            "email" => "required|email|max:255",
            "password" => "required",
        ]);

    }
}
