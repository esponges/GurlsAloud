<?php

namespace App\Http\Controllers;

use App\Models\User;
use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            // $request->session()->regenerate();
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->plainTextToken;
            // $success['token'] = $request->token;
            $success['name'] = $user->name;

            return response([$success, 'logged in'], 200);
        }

        return response('fail!', 401);
    }

    public function logout(Request $request)
    {
        if (Auth::user()) {
            Auth::logout();
            return response()->json('User logged out', 200);
        }
        return response()->json('no user logged in', 401);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'conf_pass' => 'required|same:password',
        ]);

        $credentials = $request->all();
        $credentials['password'] = bcrypt($credentials['password']);
        $user = User::create($credentials);
        $success['token'] = $user->createToken('MyApp')->plainTextToken;
        $success['name'] = $user->name;

        return response()->json([$success, 'user registered'], 200);

    }
}
