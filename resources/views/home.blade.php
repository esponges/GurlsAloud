@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Dashboard') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        Bienvenido {{ auth()->user()->name}}
                    </div>
                    <div class="container mb-2"><a class="btn btn-secondary" href="/">Página principal</a></div>
                </div>
            </div>
        </div>
    </div>
@endsection
