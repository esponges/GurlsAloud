import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function PortfolioGrid() {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: []
    //     };
    // }
    const [products, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        Axios.get("/products")
            .then(res => {
                setData( res.data );
            })
            .catch(err => {
                setError( err.message );
            });
    }, []);

    // componentDidMount() {
    //     Axios.get("/products").then(res => {
    //         this.setState({ data: res.data });
    //     });
    //     // console.log(res.data);
    // }

    // render() {
    return (
        <div>
            {/* {products ? console.log(products.products) : ""} */}
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
                        {products
                            ? products.map(product => {
                                return (
                                    <div
                                        className="col-lg-6 mb-4"
                                        key={product.id}
                                    >
                                        <div className="portfolio-item">
                                            <Link
                                                className="portfolio-link"
                                                to={{
                                                    pathname: `/product/${product.id}`,
                                                    state: {
                                                        name: product.name,
                                                        description:
                                                            product.description,
                                                        price: product.price
                                                    }
                                                }}
                                                // to={`/product/${product.id}`}
                                                // name={product.name}
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
                                                    {product.name}
                                                </div>
                                                {/* <div className="portfolio-caption-subheading text-muted">
                                                $ {product.price} mxn
                                            </div> */}
                                                <Link
                                                    className="btn btn-primary"
                                                    to={{
                                                        pathname: `/product/${product.id}`,
                                                        state: {
                                                            name: product.name,
                                                            description:
                                                                product.description,
                                                            price: product.price
                                                        }
                                                    }}
                                                >
                                                    Más fotos
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                            : ""}
                    </div>
                </div>
            </section>
        </div>
    );
}
// }

// export default PortfolioGrid;
