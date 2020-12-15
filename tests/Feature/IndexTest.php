<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Product;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class IndexTest extends TestCase
{
    // use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    /** @test */
    public function getIndex()
    {

        $this->withoutExceptionHandling();

        $response = $this->get('/');

        $response->assertOk();

        // Product::factory()->count(3)->make();
        $products = Product::all();

        $response->assertViewIs('index');
        $response->assertViewHas('products',$products);
    }

    /** @test */
    public function getProduct()
    {
        $this->withoutExceptionHandling();
        $product = Product::find(1);
        // dd($product);
        $response = $this->get(route('product.show', $product));
        $response->assertOk();
        $response->assertViewHas('product');
    }

    /** @test */
    public function seeProducts()
    {
        $this->withExceptionHandling();

        $response = $this->get('/products');
        $response->assertOk();
        $products = Product::all()->toArray();
        // dd ($products);
        $response->assertJson($products);

    }

}
