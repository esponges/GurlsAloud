<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        return $next($request)
        //WARNING: openning access to all request (*) will not let you use PayPal
        ->header("Access-Control-Allow-Origin", 'http://127.0.0.1:8000/')
        ->header("Access-Control-Allow-Methods",'GET')
        ->header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, X-Token-Auth, Authorization");
    }
}
