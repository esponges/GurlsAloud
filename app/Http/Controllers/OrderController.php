<?php

namespace App\Http\Controllers;

use Faker\Factory;
use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function newOrder(Request $request)
    {
        if (auth()->user()) {
            $order = new Order();
            $order->total = \Cart::getTotal();
            $order->total_items = \Cart::getTotalQuantity();
            $order->name = $request->name;
            $order->email = $request->email;
            // $order->phone = $request->phone;
            // $order->address = $request->address;
            // $order->payment_mode = $faker->numberBetween(1,2);
            $order->payment_mode = 2;
            $order->user_id = auth()->user()->id;
            $order->save();

            $CartItems = \Cart::getContent();

            foreach ($CartItems as $item) {
                DB::table('order_items')->insert([
                    'product_id' => $item->id,
                    'unit_price' => $item->price,
                    'order_id' => $order->id,
                    'qty' => $item->quantity
                ]);
            }
            if ($order->payment_mode == 1) {

                //confirmation email
                \Cart::clear();
                return view('order.success', compact('order'));

            } elseif ($order->payment_mode == 2) {

                //redirect to paypal payment controller
                return redirect()->route('paypal.checkout', $order->id);
            }
        } else {
            dd('session timed out');
        }
    }
}
