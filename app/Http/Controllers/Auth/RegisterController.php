<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function showRegisterForm(){
        return Inertia::render("Authentication/RegisterPage");
    }

    public function register(Request $request){

        $request->validate([
            'name' => "required|max:200",
            'email' => "required|email|max:255",
            'password' => 'required|confirmed|max:50',
            'password_confirmation' => 'required',
        ]);

        return to_route('login')->with('success', "Your account has been created successfully, please login");

    }
}
