import Axios from "axios";
import React, { Component } from "react";
import Footer from "../Layouts/Footer";
import ParentNav from "../Layouts/ParentNav";
import { Link, Switch, useRouteMatch } from "react-router-dom";
import Loader from "./../../loader.gif";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.state = {
            cartItems: [{}],
            loading: false,
            error: ""
        };
    }

    removeItem(id) {
        // e.preventDefault();
        // const id = e.target.value;
        this.setState({loading: true}, () => {
            Axios.get(`http://127.0.0.1:8000/cart/destroy/${id}`);
            Axios.get("http://127.0.0.1:8000/cart").then(res => {
                this.setState({
                    cartItems: res.data, loading: false
                });
            }).catch((error) =>
            this.setState({
                loading: false, error: error.res.data.message
            }));
        });
        console.log(id);

        console.log("force update!");
        this.forceUpdate();
        // window.alert("producto eliminado");
        // this.useState(this.filter((diffId) => diffId !== id));
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            Axios.get("http://127.0.0.1:8000/cart")
                .then(res => {
                    this.setState({
                        cartItems: res.data,
                        loading: false
                    });
                })
                .catch(error =>
                    this.setState({
                        loading: false,
                        error: error.res.data.message
                    })
                );
        });
        console.log("successfully retrieved cart items");
    }

    render() {
        const { cartItems, loading, error } = this.state;
        // console.log(cartItems);

        return (
            <div>
                <ParentNav />
                {loading && (
                    <img className="loader" src={Loader} alt="Loader" />
                )}
                {error && <div className="alert alert-danger">{error}</div>}
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
                                                value={cartItem.id}
                                                onClick={() =>
                                                    this.removeItem(cartItem.id)
                                                }
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
                        <Link to="/cart/checkout" className="btn btn-primary center">
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
