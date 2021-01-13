import Axios from "axios";
import { data } from "jquery";
import React from "react";

class ProductModal extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount () {
        Axios.get("/products")
        .then(res => {
            this.setState({data: res.data})
        })
    }

    render() {
        return (
            <div>
                {this.state.data.map(data => {
                    <div
                        className="portfolio-modal modal fade"
                        id="portfolioModal1"
                        tabIndex="-1"
                        role="dialog"
                        aria-hidden="true"
                        key={data.id}
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div
                                    className="close-modal"
                                    data-dismiss="modal"
                                >
                                    <img
                                        src="assets/img/close-icon.svg"
                                        alt="Close modal"
                                    />
                                </div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="modal-body">
                                                <h2 className="text-uppercase">
                                                    Holis
                                                </h2>
                                                <p className="item-intro text-muted">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur.
                                                </p>
                                                <img
                                                    className="img-fluid d-block mx-auto"
                                                    src="assets/img/portfolio/girl.jpg"
                                                    alt=""
                                                />
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur.
                                                </p>
                                                <ul className="list-inline">
                                                    <li>Date: January 2020</li>
                                                    <li>Precio:$ mxn</li>
                                                    <li>
                                                        Category: Illustration
                                                    </li>
                                                </ul>
                                                <button
                                                    className="btn btn-primary"
                                                    data-dismiss="modal"
                                                    type="button"
                                                >
                                                    <i className="fas fa-times mr-1"></i>
                                                    Comprar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;
                })}
            </div>
        );
    }
}

export default ProductModal;
