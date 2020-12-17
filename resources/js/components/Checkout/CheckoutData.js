import React, { Component } from 'react'
import Footer from '../Layouts/Footer';
import ParentNav from '../Layouts/ParentNav';
import CheckoutForm from './CheckoutForm';

class CheckoutData extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: {csrf_token}
        }
    }

    render () {
        return (
        <div>
            <ParentNav />
            <CheckoutForm  passToken={this.state.token} />
            <Footer />
        </div>
        )
    }
}

export default CheckoutData;
