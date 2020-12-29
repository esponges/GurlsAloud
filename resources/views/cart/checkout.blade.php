@extends('layouts.app')

@section('content')
    <div class="container mt-5 checkout-form">
        <form action="{{route('order.create')}}" method="POST" id="checkout-form">
            @csrf
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp"
                    placeholder="Enter email" value="{{$user->email ? $user->email : ''}}">
                <label class="error" for="email"></label>
            </div>
            <div class="form-group">
                <label>Tu nombre</label>
                <input type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp"
                    placeholder="Enter email" value="{{$user->name ? $user->name : ''}}">
                <label class="error" for="name"></label>
            </div>
            <button type="submit" class="btn btn-primary">Pagar con Paypal<span class="fab fa-paypal" aria-hidden="true"></span></button>
        </form>
    </div>

@endsection
