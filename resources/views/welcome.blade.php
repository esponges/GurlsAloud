@extends('layouts.main')

@section('content')

<div id='app'></div>

{{-- React --}}
<script src={{ asset('js/app.js') }} defer></script>

@endsection


