<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\UserProduct;
use Illuminate\Http\Request;
use App\Mail\ConfirmationEmail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Srmklive\PayPal\Services\ExpressCheckout;

class PaypalController extends Controller
{
    public function checkout($id)
    {
        $this->provider = new ExpressCheckout();
        $cart = $this->getCheckoutData($id);

        try {
            $response = $this->provider->setExpressCheckout($cart);

            return redirect($response['paypal_link']);
            //taking you to Paypal payment
        } catch (\Exception $e) {
            $invoice = $this->createInvoice($cart, 'Invalid');

            session()->put(['code' => 'danger', 'message' => "Error processing PayPal payment for Order $invoice->id!"]);
        }
    }

    public function getCheckoutData($id)
    {
        $cart = \Cart::getContent();

        $cartItems = array_map( function($item) {
            return [
                'name' => $item['name'],
                'price' => $item['price'],
                'qty' => $item['quantity']
            ];
        }, $cart->toarray());


        $checkoutData = [
            'items' => $cartItems,
            'return_url' => route('paypal.success', $id),
            'cancel_url' => route('index'),
            'invoice_id' => config('paypal.invoice_prefix') . '_' . $id,
            'invoice_description' => "Order #$id Invoice",
            'total' => \Cart::getTotal()
        ];

        // dd($checkoutData);

        return $checkoutData;
    }

    public function getExpressCheckoutSuccess(Request $request, $id)
    {
        $token = $request->get('token');
        $PayerID = $request->get('PayerID');
        $checkoutData = $this->getCheckoutData($id);

        $this->provider = new ExpressCheckout();
        $response = $this->provider->getExpressCheckoutDetails($token);

        if (in_array(strtoupper($response['ACK']), ['SUCCESS', 'SUCCESSWITHWARNING'])) {

            $payment_status = $this->provider->doExpressCheckoutPayment($checkoutData, $token, $PayerID);
            $status = $payment_status['PAYMENTINFO_0_PAYMENTSTATUS'];

            if (in_array($status, ['Completed', 'Processed'])) {
                $order = Order::find($id);
                $order->is_paid = 1;
                $order->save();

                //send success email
                Mail::to($order->user->email)->send(new ConfirmationEmail($order));

                //create user permission
                $orderItems = DB::table('order_items')->where('order_id', $order->id)->get();
                foreach ($orderItems as $item ) {
                    $userProduct = new UserProduct;
                    $userProduct->user_id = $order->user_id;
                    $userProduct->product_id = $item->product_id;
                    $userProduct->save();
                }

                \Cart::clear();

                return view('order.success', ['order' => $order]);
            };
        }

        dd('oh no, something went wrong!!!');
    }
}
