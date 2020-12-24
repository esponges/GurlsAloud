<?php

namespace Tests\Feature;

use Faker\Factory;
use Tests\TestCase;
use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OrderTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /** @test */
    public function saveOrder()
    {
        $this->withoutExceptionHandling();
        $this->withoutMiddleware();

        $user = User::first();

        $response = $this->actingAs($user)->post('/order/create');
        $response->assertResponse(302);

        // //fake cart
        // $item = Product::first();
        // $item2 = Product::find(2);
        // \Cart::add(array(
        //     'id' => $item->id,
        //     'name' => $item->name,
        //     'price' => $item->price,
        //     'quantity' => 2,
        //     'attributes' => array(),
        //     'associatedModel' => $item
        // ));
        // \Cart::add(array(
        //     'id' => $item2->id,
        //     'name' => $item2->name,
        //     'price' => $item2->price,
        //     'quantity' => 4,
        //     'attributes' => array(),
        //     'associatedModel' => $item2
        // ));


        // ////
        // $items = \Cart::getContent();

        // $faker = Factory::create();

        // $order = new Order();
        // $order->total = \Cart::getTotal();
        // $order->total_items = \Cart::getTotalQuantity();
        // $order->name = 'Paco';
        // $order->phone = '12345678';
        // $order->address = 'mi casa 123';
        // // $order->payment_mode = $faker->numberBetween(1,2);
        // $order->payment_mode = 2;
        // $order->user_id = User::first()->id;
        // $order->save();

        // foreach ($items as $item) {
        //     DB::table('order_items')->insert([
        //         'product_id' => $item->id,
        //         'unit_price' => $item->price,
        //         'order_id' => $order->id,
        //         'qty' => $item->quantity
        //     ]);
        // }

        // $response->assertViewIs('order.success');
        // $response->assertViewHas(compact($order));
    }

    /** @test */
    public function redirectToPayPal()
    {
        $this->withoutExceptionHandling();
        $this->withoutMiddleware();

        $response = $this->get(route('paypal.checkout', 1));
        $response->assertOk();

        // $response->assertRedirect(route('paypal.checkout', $order->id));
        // $response->assertOk();
    }
}
