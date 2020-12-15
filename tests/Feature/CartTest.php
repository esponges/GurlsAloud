<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Product;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use function GuzzleHttp\json_decode;

class CartTest extends TestCase
{
    use DatabaseTransactions;

    /* Attempt to pass global variables to avoid repeating code in each teast but it does not work... 25 nov. */

    // public $item;
    // public $fakeCart;


    // public function __construct()
    // {
    //     $this->item = Product::find(1);
    //     $this->fakeCart =
    //     \Cart::add(array(
    //         'id' => $this->item->id,
    //         'name' => $this->item->name,
    //         'price' => $this->item->price,
    //         'quantity' => 2,
    //         'attributes' => array(),
    //         'associatedModel' => $this->item
    //     ));
    // }

    /************************ */

    // use RefreshDatabase;
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

    /* Created to avoid repeating add code into each function */
    public function addFirstItemToCart()
    {
        $item = Product::first();
        \Cart::add(array(
            'id' => $item->id,
            'name' => $item->name,
            'price' => $item->price,
            'quantity' => 2,
            'attributes' => array(),
            'associatedModel' => $item
        ));
    }

    /** @test */
    public function getCartItems()
    {
        $this->withoutExceptionHandling();

        $response = $this->get('/cart');
        $response->assertOk();

        $this->addFirstItemToCart();

        $content = (\Cart::getContent());
        $content = (array) $content;
        // $items = \Cart::getContent();
        // dd($items);
        $response->assertJson($content);

        // $response->assertViewIs('cart.index');
        // $response->assertViewHas('items', $items);
    }

    /** @test */
    public function addItemsToCart()
    {
        $this->withoutExceptionHandling();
        // $this->withoutMiddleware();

        // dd(\Cart::getContent());
        $id = 1;
        $item = Product::find($id);
        // dd ($item);

        $this->assertEquals($item->id, $id);

        $response = $this->get(route('cart.add', $id));
        $response->assertOk();
        // dd('hello');

        \Cart::add(array(
            'id' => $item->id,
            'name' => $item->name,
            'price' => $item->price,
            'quantity' => 1,
            'attributes' => array(),
            'associatedModel' => $item
        ));

        $response->assertRedirect('/');
    }

    /** @test */
    public function destroyItems()
    {
        $this->withoutExceptionHandling();

        // $item = Product::first();

        // \Cart::add(array(
        //     'id' => $item->id,
        //     'name' => $item->name,
        //     'price' => $item->price,
        //     'quantity' => 1,
        //     'attributes' => array(),
        //     'associatedModel' => $item
        // ));

        $this->addFirstItemToCart();
        // dd(\Cart::getContent());

        $response = $this->get(route('cart.destroy', 1));
        $response->assertOk();

        $response->assertViewIs('cart.index');
    }

    /** @test */
    public function proceedCheckout()
    {
        $this->withoutExceptionHandling();
        $this->withoutMiddleware();

        $response = $this->get(route('cart.checkout'));
        $response->assertOk();

        $this->addFirstItemToCart();

        $response->assertViewIs('cart.checkout');

    }
}
