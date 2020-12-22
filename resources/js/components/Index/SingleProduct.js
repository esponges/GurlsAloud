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
        this.state = {
            data: {}
        };

    }

    onClick(e) {
        e.preventDefault();
        Axios.get(`http://127.0.0.1:8000/cart/add-item/${this.state.data.id}`).then(
            res => {
                console.log("success adding to cart", res.data);
                window.alert(`${this.state.data.name} añadido al carrito`);
            }
        );
    }

    componentDidMount() {
        // const { id } = this.props.match.params;
        const id = this.props.match.params.id;
        console.log(id);
        Axios.get(`http://127.0.0.1:8000/product/${id}`).then(
            res => {
                this.setState({ data: res.data });
            }
        );
        console.log("component Did Mount - product", this.props.id);
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <ParentNav />
                <Masthead />
                <div className="container mt-5 mb-5" id="card-product">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <img
                                        src="http://127.0.0.1:8000/assets/img/portfolio/girl.jpg"
                                        alt=""
                                    />
                                    <p className="card-text">
                                        {data.description}
                                    </p>
                                    <h5 className="card-title">
                                        $ {data.price} mxn
                                    </h5>
                                    {/* <form onClick={this.onClick} method="get"> */}
                                    {/* <input type="hidden" value={data.id} id="id"/> */}
                                    <button
                                        onClick={this.onClick}
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        Añadir al carrito
                                    </button>
                                    {/* </form>{" "} */}
                                    {"   "}
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
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(SingleProduct);
