import Axios from "axios";
import React, { Component } from "react";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import {Link} from '@reach/router'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.state = {
            cartItems: [{}]
        };
    }

    removeItem(e) {
        // e.preventDefault();
        const id = e.target.dataset.value;
        console.log(id);
        Axios.get(`http://127.0.0.1:8000/cart/destroy/${id}`).then(res => {
            this.setState({
                cartItems: res.data
            })
        })
    }

    componentDidMount() {
        Axios.get("http://127.0.0.1:8000/cart").then(res => {
            this.setState({
                cartItems: res.data
            });
        });
        console.log("successfully retrieved cart items");
    }

    render() {
        const { cartItems } = this.state;
        return (
            <div>
                <Navbar />
                {/* <Masthead /> */}
                <div className="container mt-5 mb-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(cartItems).map((cartItem, i) => {
                                // console.log(cartItem.id);
                                return (
                                    <tr key={i}>
                                        <td scope="row">{cartItem.name}</td>
                                        <td>{cartItem.price}</td>
                                        <td>{cartItem.quantity}</td>
                                        <td>
                                            <button
                                                data-value={cartItem.id}
                                                onClick={this.removeItem}
                                                className="btn btn-danger"
                                            >
                                                <i
                                                    className="fa fa-trash"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div
                        className="mt-5 mb-5 text"
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <Link to="#" className="btn btn-primary center">
                            Pagar
                        </Link>

                        <Link to="/" className="btn btn-secondary center">
                            Regresar
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Cart;
