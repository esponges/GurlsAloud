@component('mail::message')
# Introduction

Gracias por comprar amigo!

@component('mail::button', ['url' => ''])
Tu nombre: {{$order->name}}

Total: {{$order->total}}

@endcomponent

Gracias,<br>
{{ config('app.name') }}
@endcomponent
