<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Product;
use App\Models\UserProduct;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SingleProductViewTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    /** @test */
    public function check_auth_user_has_permission()
    {
        $this->withoutExceptionHandling();

        $user = User::first();
        $product = Product::first();
        $showProducts = false;

        $response = $this->actingAs($user)->get('/product/' . $product->id);

        $response->assertStatus(200);

        //Assert view has Json response from called product
        $response->assertJsonFragment($product->toArray());
    }

    /**@test */
    public function test_guests_dont_have_permission()
    {
        $this->withoutExceptionHandling();
        $product = Product::first();

        $response = $this->get('/product/' . $product->id);

        $response->assertStatus(200);
        $response->assertJsonFragment(['You don\'t have permission']);
    }
}
