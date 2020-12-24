<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Product;
use function GuzzleHttp\json_decode;
use Illuminate\Foundation\Auth\User;

use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CartTest extends TestCase
{
    use DatabaseTransactions;

    /* Attempt to pass global variables to avoid repeating code in each teast but it does not work... 25 nov. */

    // public $item;
    // public $fakeCart;

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

        // $this->addFirstItemToCart();

        $content = (\Cart::getContent());
        $content =  array($content);
        $response->assertJsonCount(0);

        // $response->assertViewIs('cart.index');
        // $response->assertViewHas('items', $items);
    }

    /** @test */
    public function addItemsToCart()
    {
        $this->withoutExceptionHandling();
        // $this->withoutMiddleware();

        $id = 1;
        $item = Product::find($id);

        $this->assertEquals($item->id, $id);

        $response = $this->get(route('cart.add', $id));
        $response->assertOk();

        \Cart::add(array(
            'id' => $item->id,
            'name' => $item->name,
            'price' => $item->price,
            'quantity' => 1,
            'attributes' => array(),
            'associatedModel' => $item
        ));
        $json = array('added items to cart');

        $response->assertJson($json);
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

        $response = $this->get(route('cart.destroy', 1));
        $response->assertOk();

        $response->assertJsonCount(0);
    }

    /** @test */
    public function proceedCheckout()
    {
        $this->withoutExceptionHandling();
        // $this->withoutMiddleware();

        $response = $this->actingAs(User::first())
                    ->get(route('cart.checkout'));
        $response->assertStatus(302);

        // $this->addFirstItemToCart();
        // \Cart::clear();

        if (\Cart::getTotal() != 0 ) {
            $response->assertViewIs('cart.checkout');
        } else {
            // dd ('success');
            $response->assertRedirect('/');
        }

    }
}
