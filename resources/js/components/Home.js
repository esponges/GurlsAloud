import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cart from './Checkout/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SingleProduct from './Index/SingleProduct';

class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <Router>
                    <App path="/" />
                    <SingleProduct path="/product/:id" />
                    <Cart path="/cart"/>
                    <CheckoutData path="/cart/checkout" />
                </Router> */}
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <App />
                        </Route>
                        <Route exact path="/cart">
                            <Cart />
                        </Route>
                        <Route path='/product/:id' children={<SingleProduct />} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById("mayki"));
