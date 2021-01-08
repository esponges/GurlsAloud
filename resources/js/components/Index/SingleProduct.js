import Axios from "axios";
import React from "react";
import Footer from "../Layouts/Footer";
import ParentNav from "../Layouts/ParentNav";
import Masthead from "./Masthead";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class SingleProduct extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.child = React.createRef(); // call child addedToCart function
        this.state = {
            data: {}
        };
    }

    onClick(e) {
        e.preventDefault();
        this.child.current.addedToCart();
        Axios.get(
            `http://127.0.0.1:8000/cart/add-item/${this.props.match.params.id}`
        ).then(() => {
            window.alert(`${this.props.location.name} añadido al carrito`);
        });
    }

    componentDidMount() {
        // const { id } = this.props.match.params;
        const id = this.props.match.params.id;
        // console.log(id);
        Axios.get(`http://127.0.0.1:8000/product/${id}`).then(res => {
            this.setState({ data: res.data });
        });
        // console.log("component Did Mount");
    }

    render() {
        const { data } = this.state;
        const { location } = this.props;
        return (
            <div>
                {/* {console.log(this.props)} */}
                <ParentNav ref={this.child}/>
                <Masthead />
                <div className="container mt-5 mb-5" id="card-product">
                    <div className="row">
                        <div className="container col-sm-12">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {location.name}
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
                                        {location.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                {data == "You don't have permission" ? (
                                    <b>
                                        ¿Quieres ver más? Compra tu acceso para
                                        más fotos
                                    </b>
                                ) : (
                                    <div className="card-body">
                                        <div className="cart-text portfolio-caption-subheading text-muted">
                                            Porque ya pagaste ;)...
                                        </div>
                                        <img
                                            className="mt-2"
                                            src="http://127.0.0.1:8000/assets/img/paid1.png"
                                            alt=""
                                        />
                                        <img
                                            className="mt-2"
                                            src="http://127.0.0.1:8000/assets/img/paid2.png"
                                            alt=""
                                        />

                                        {/* <form onClick={this.onClick} method="get"> */}
                                        {/* <input type="hidden" value={data.id} id="id"/> */}
                                    </div>
                                )}
                            </div>
                            <div className="container mt-2">
                                {/* </form>{" "} */}
                                {data == "You don't have permission" ? (
                                    <div>
                                        <button
                                            onClick={this.onClick}
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            Compra tu acceso!
                                        </button>
                                        <p className="portfolio-caption-subheading text-muted">
                                            <u>Sólo ${location.price} mxn</u>
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
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(SingleProduct);
