import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SingleProduct from './Index/SingleProduct';
import { Router } from '@reach/router';
import Cart from './Checkout/Cart'
import CheckoutData from './Checkout/CheckoutData';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <App path="/" />
                    <SingleProduct path="/product/:id" />
                    <Cart path="/cart"/>
                    <CheckoutData path="/cart/checkout" />
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById("mayki"));
