<?php

namespace Tests\Feature;

use Faker\Factory;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    // generate token for login
    protected function token ($email, $pass) {
        $encryptedToken = base64_encode($email . ':' . $pass);
        // $response = $this->json('post', 'login', ['token' => $encryptedToken]);
        // $content = json_decode($response->getContent());
        if (isset($encryptedToken)) {
            return $encryptedToken;
        }
    }
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_login_route_api()
    {
        $this->withoutExceptionHandling();

        // dd (User::first());
        $user = User::factory()->make();
        // dd($user);

        $response = $this->post('/api/login', [
            'email' => $user->email,
            'password' => $user->password,
        ], []);

        $response->dumpHeaders();

        $response->dumpSession();

        $response->dump();

        $response->assertStatus(200);
    }

    /** @test */
    public function test_auth_logout_if_logged_in()
    {
        $this->withoutExceptionHandling();

        $user = User::factory()->make();

        $response = $this->actingAs($user)->get('/api/logout');

        $response->dumpHeaders();

        $response->dumpSession();

        $response->dump();

        $response->assertStatus(200);
    }

    /** @test */
    public function test_auth_logout_if_not_logged_in()
    {
        $this->withoutExceptionHandling();

        $response = $this->get('/api/logout');

        $response->dumpHeaders();

        $response->dumpSession();

        $response->dump();

        $response->assertStatus(401);
    }

    /** @test */
    public function test_new_register()
    {
        $this->withExceptionHandling();

        $user = array_merge(User::factory()->make()->toArray(), [
            'password' =>  '123456',
            'conf_pass' =>  '123456',
        ]);

        $response = $this->post('/api/register', [
            'name' => $user['name'],
            'email' => $user['email'],
            'password' => $user['password'],
            'conf_pass' => $user['conf_pass'],
        ]);

        $response->dumpHeaders();

        $response->dumpSession();

        $response->dump();

        $response->assertStatus(200);
    }
}
