import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Cart from "./Checkout/Cart";
import CheckoutData from "./Checkout/CheckoutData";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import SingleProduct from "./Index/SingleProduct";

class Home extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route path="/cart/checkout"><CheckoutData /></Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                        <Route
                            path="/product/:id"
                            children={<SingleProduct />}
                        />
                        <Route path="/">
                            <App />
                        </Route>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById("mayki"));
