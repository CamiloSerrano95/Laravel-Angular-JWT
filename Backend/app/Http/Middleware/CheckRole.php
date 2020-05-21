<?php

namespace App\Http\Middleware;

use Closure;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
        if ($request->user()->role == $role) {
            return $next($request);   
        }

        $response = [
            'status' => 401,
            'msj' => 'Unauthorized'
        ];

        return response()->json($response, 401);
    }
}
