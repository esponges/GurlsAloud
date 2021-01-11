<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function logSocial($credentials)
    {
        $this->validateLogin($credentials);

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if (
            method_exists($this, 'hasTooManyLoginAttempts') &&
            $this->hasTooManyLoginAttempts($credentials)
        ) {
            $this->fireLockoutEvent($credentials);

            return $this->sendLockoutResponse($credentials);
        }

        if ($this->attemptLogin($credentials)) {
            return $this->sendLoginResponse($credentials);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($credentials);

        return $this->sendFailedLoginResponse($credentials);
    }

    public function facebookLogin()
    {
        return Socialite::driver('facebook')->redirect();
    }

    public function facebookRedirect()
    {
        $user = Socialite::driver('facebook')->stateless()->user();
        $regUser = (User::where('email', $user->email)->get());
        $userInfo = ["_token" => csrf_token(), 'email' => $user->email, 'password', $regUser[0]->password];

        // dd('call social');
        // AuthenticatesUsers::login($userInfo);
        $this->logSocial($userInfo);

        $user = User::firstOrCreate([
            'email' => $user->getEmail()
        ], [
            'name' => $user->getName(),
            'password' => Hash::make(Str::random(12))
        ]);

        Auth::login($user, true);

        return redirect('/home');
    }
}
