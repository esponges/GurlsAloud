<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PaypalTest extends TestCase
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
    public function paypalRoute()
    {
        $this->withoutMiddleware();
        $this->withoutExceptionHandling();

        $response = $this->get(route('paypal.checkout', 1));
        $response->assertOk();
        }
}
