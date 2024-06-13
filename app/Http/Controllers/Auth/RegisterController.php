<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    public function showRegisterForm(){
        return Inertia::render("Authentication/RegisterPage");
    }

    public function register(Request $request){

        $request->validate([
            'name' => "required|max:200",
            'email' => "required|email|max:255|unique:users",
            'password' => 'required|confirmed|max:50',
            'password_confirmation' => 'required',
        ]);

        User::create($request->only(['name', 'email', 'password']));

        return to_route('login')->with('success', "Your account has been created successfully, please login");

    }
}
