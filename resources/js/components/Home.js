import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SingleProduct from './Index/SingleProduct';
import { Router } from '@reach/router';
import Cart from './Index/Cart'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <App path="/" />
                    <SingleProduct path="/product/:id" />
                    <Cart path="/cart"/>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById("app"));
