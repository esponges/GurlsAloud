@extends('layouts.main')

@section('content')
    <div class="container">
        <div class="card" style="background-color:cadetblue; border-color:darkblue;">
          <img class="card-img-top" src="holder.js/100x180/" alt="">
          <div class="card-body">
            <h4 class="card-title">Gracias por tu compra</h4>
            <p class="card-text">Maykin está feliz</p>
            <table class="table">
                <thead>
                    <tr>
                        <th>N° de orden</th>
                        <th>Total pagado</th>
                        <th>Items</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">{{$order->id}}</td>
                        <td>{{$order->total}}</td>
                        <td>{{$order->total_items}}</td>
                    </tr>
                </tbody>
            </table>
            <a href="/" class="btn btn-primary">Página principal</a>
          </div>
        </div>
    </div>
@endsection
