import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../Layouts/Footer";
import ParentNav from "../Layouts/ParentNav";
import { Link } from "react-router-dom";
import Loader from "./../../loader.gif";

const Cart = () => {
    // constructor(props) {
    //     super(props);
    //     this.removeItem = this.removeItem.bind(this);
    //     this.state = {
    //         cartItems: [{}],
    //         loading: false,
    //         error: ""
    //     };
    // }
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const childRef = useRef();

    // removeItem(id) {
    //     // e.preventDefault();
    //     // const id = e.target.value;
    //     this.setState({loading: true}, () => {
    //         Axios.get(`http://127.0.0.1:8000/cart/destroy/${id}`);
    //         Axios.get("http://127.0.0.1:8000/cart").then(res => {
    //             this.setState({
    //                 cartItems: res.data, loading: false
    //             });
    //         }).catch((error) =>
    //         this.setState({
    //             loading: false, error: error.res.data.message
    //         }));
    //     });
    //     console.log(id);

    //     console.log("force update!");
    //     this.forceUpdate();
    //     // window.alert("producto eliminado");
    //     // this.useState(this.filter((diffId) => diffId !== id));
    // }

    const removeItem = (id) => {
        // console.log('removed!' , id);
        setLoading(true);
        Axios.get(`http://127.0.0.1:8000/cart/destroy/${id}`);
        Axios.get("http://127.0.0.1:8000/cart")
            .then(res => {
                setCartItems(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
        childRef.current.addedToCart();
    }

    useEffect(() => {
        setLoading(true);
        Axios.get("http://127.0.0.1:8000/cart")
        .then( res => {
            setCartItems(res.data);
            setLoading(false);
        })
        .catch( err => {
            setError( err.message);
            setLoading(false);
        })
    }, [])

    // componentDidMount() {
    //     this.setState({ loading: true }, () => {
    //         Axios.get("http://127.0.0.1:8000/cart")
    //             .then(res => {
    //                 this.setState({
    //                     cartItems: res.data,
    //                     loading: false
    //                 });
    //             })
    //             .catch(error =>
    //                 this.setState({
    //                     loading: false,
    //                     error: error.res.data.message
    //                 })
    //             );
    //     });
    //     console.log("successfully retrieved cart items");
    // }

    // render() {
    //     const { cartItems, loading, error } = this.state;
        // console.log(cartItems);

        return (
            <div>
                <ParentNav
                ref={childRef}
                />
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
                                                    removeItem(cartItem.id)
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
                        <a href="/cart/checkout" className="btn btn-primary center">
                            Pagar
                        </a>

                        <Link to="/" className="btn btn-secondary center">
                            Regresar
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
// }

export default Cart;
