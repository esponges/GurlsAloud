@extends('layouts.app')

@section('content')
    <div class="container mt-5" id="checkoutform">
        <form action="{{route('order.create')}}" method="POST">
            @csrf
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email" value="{{$user->email ? $user->email : ''}}">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Tu nombre</label>
                <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email" value="{{$user->name ? $user->name : ''}}">
                <small id="emailHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
            </div>
            <button type="submit" class="btn btn-primary">Pagar con Paypal<span class="fab fa-paypal" aria-hidden="true"></span></button>
        </form>
    </div>

@endsection
