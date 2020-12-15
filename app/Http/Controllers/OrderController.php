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
        // $order = new Order();
        // $order->total = \Cart::getTotal();
        // $order->total_items = \Cart::getTotalQuantity();
        // $order->name = $request->input('name');
        // $order->phone = $request->input('phone');
        // $order->address = $request->input('address');
        // // $order->payment_mode = $faker->numberBetween(1,2);
        // $order->payment_mode = $request->input('payment_mode');
        // $order->user_id = auth()->user();
        // $order->save();

        $item = Product::first();
        $item2 = Product::find(2);
        \Cart::add(array(
            'id' => $item->id,
            'name' => $item->name,
            'price' => $item->price,
            'quantity' => 2,
            'attributes' => array(),
            'associatedModel' => $item
        ));
        \Cart::add(array(
            'id' => $item2->id,
            'name' => $item2->name,
            'price' => $item2->price,
            'quantity' => 4,
            'attributes' => array(),
            'associatedModel' => $item2
        ));


        ////
        $items = \Cart::getContent();
        // dd($items->quantity);

        // dd(\Cart::getTotal());
        $faker = Factory::create();

        $order = new Order();
        $order->total = \Cart::getTotal();
        $order->total_items = \Cart::getTotalQuantity();
        $order->name = 'Paco';
        $order->phone = '12345678';
        $order->address = 'mi casa 123';
        // $order->payment_mode = $faker->numberBetween(1,2);
        $order->payment_mode = 2;
        $order->user_id = User::first()->id;
        $order->save();

        foreach ($items as $item) {
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
    }
}
