import Axios from "axios";
import React from "react";
import {Link} from 'react-router-dom';

class PortfolioGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        Axios.get("http://127.0.0.1:8000/products").then(res => {
            this.setState({ data: res.data });
        });
        // console.log(res.data);
    }

    render() {
        return (
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">
                                Portfolio
                            </h2>
                            <h3 className="section-subheading text-muted">
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                        </div>
                        <div className="row">
                            {this.state.data.map(data => {
                                return (
                                    <div
                                        className="col-lg-4 col-sm-6 mb-4"
                                        key={data.id}
                                    >
                                        <div className="portfolio-item">
                                            <Link
                                                className="portfolio-link"
                                                to={`/product/${data.id}`}
                                            >
                                                <div className="portfolio-hover">
                                                    <div className="portfolio-hover-content">
                                                        <i className="fas fa-plus fa-3x"></i>
                                                    </div>
                                                </div>
                                                <img
                                                    className="img-fluid"
                                                    src="assets/img/portfolio/girl.jpg"
                                                    alt=""
                                                />
                                            </Link>
                                            <div className="portfolio-caption">
                                                <div className="portfolio-caption-heading">
                                                    {data.name}
                                                </div>
                                                <div className="portfolio-caption-subheading text-muted">
                                                    $ {data.price} mxn
                                                </div>
                                                <Link
                                                    className="button"
                                                    to={`/product/${data.id}`}
                                                >
                                                    Detalles
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PortfolioGrid;
