<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

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

        if(Auth::attempt($request->only('email', 'password'))){
            return to_route('dashboard');
        }

        throw ValidationException::withMessages([
            "email" => "Sorry! User not found in our records! please check your credentials",
        ]);

    }
}
