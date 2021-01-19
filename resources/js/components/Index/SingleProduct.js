import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../Layouts/Footer";
import ParentNav from "../Layouts/ParentNav";
import Masthead from "./Masthead";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function SingleProduct (props) {
    // constructor(props) {
    //     super(props);
    //     this.onClick = this.onClick.bind(this);
    //     this.child = React.createRef(); // call child addedToCart function
    //     this.state = {
    //         data: {}
    //     };
    // }
    const [product, setProduct] = useState('');
    const childRef = useRef();

    // onClick(e) {
    //     e.preventDefault();
    //     this.child.current.addedToCart();
    //     Axios.get(
    //         `/cart/add-item/${props.match.params.id}`
    //     ).then(() => {
    //         window.alert(`${this.props.location.name} añadido al carrito`);
    //     });
    // }

    const onClick = (e) => {
        e.preventDefault();
        // update cart count from navbar
        Axios.get(
            `/cart/add-item/${props.match.params.id}`
        ).then(() => {
            window.alert(`${props.location.state.name} añadido al carrito`);
        });
        childRef.current.addedToCart();
    };

    // componentDidMount() {
    //     // const { id } = this.props.match.params;
    //     const id = this.props.match.params.id;
    //     // console.log(id);
    //     Axios.get(`/product/${id}`).then(res => {
    //         this.setState({ data: res.data });
    //     });
    //     // console.log("component Did Mount");
    // }

    useEffect(() => {
        // console.log(props);
        const id = props.match.params.id;
        Axios.get(`/product/${id}`)
        .then( res => {
            // console.log(res);
            setProduct( res.data )
        })
    }, [])


    // render() {
        // const { data } = this.state;
        // const { location } = this.props;
        return (
            <div>
                <ParentNav ref={childRef} />
                <Masthead />
                <div className="container mt-5 mb-5" id="card-product">
                    <div className="row">
                        <div className="container col-sm-12">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {/* {location.name} */}
                                        </h5>
                                        <img
                                            className="img-fluid mt-2"
                                            src="assets/img/free1.png"
                                            alt=""
                                        />
                                        <img
                                            className="img-fluid mt-2"
                                            src="assets/img/free2.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="card-text">
                                        {/* {location.description} */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {product === "" ? (
                            <div className="container mt-2">
                                <Link
                                    to={"/"}
                                    className="btn btn-secondary btn-sm"
                                >
                                    Regresar
                                </Link>
                            </div>
                        ) : (
                            <div className="col-sm-12">
                                <div className="card">
                                    {product === "You don't have permission" ? (
                                        <b>
                                            ¿Quieres ver más? Compra tu acceso
                                            para más fotos
                                        </b>
                                    ) : (
                                        <div className="card-body">
                                            <div className="cart-text portfolio-caption-subheading text-muted">
                                                Porque ya pagaste ;)...
                                            </div>
                                            <img
                                                className="mt-2"
                                                src="/assets/img/paid1.png"
                                                alt=""
                                            />
                                            <img
                                                className="mt-2"
                                                src="/assets/img/paid2.png"
                                                alt=""
                                            />

                                            {/* <form onClick={this.onClick} method="get"> */}
                                            {/* <input type="hidden" value={data.id} id="id"/> */}
                                        </div>
                                    )}
                                </div>
                                <div className="container mt-2">
                                    {/* </form>{" "} */}
                                    {product == "You don't have permission" ? (
                                        <div>
                                            <button
                                                onClick={onClick}
                                                className="btn btn-primary"
                                                type="submit"
                                            >
                                                Compra tu acceso!
                                            </button>
                                            <p className="portfolio-caption-subheading text-muted">
                                                <u>
                                                    Sólo $
                                                    {props.location.state.price}{" "}
                                                    mxn
                                                </u>
                                            </p>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <Link
                                        to={"/"}
                                        className="btn btn-secondary btn-sm"
                                    >
                                        Regresar
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
// }

export default withRouter(SingleProduct); // get match, location and history props with withRouter component
