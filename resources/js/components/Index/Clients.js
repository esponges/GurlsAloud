import React from "react";

class Clients extends React.Component {
    render() {
        return (
            <div>
                <div className="py-5">
                    <div className="container">
                        <div
                            className="row"
                            // style="max-width: 50%; margin: 0 auto;"
                        >
                            <h4 className="col-lg-12 text-center">
                                Aceptamos pagos con
                                <i className="fab fa-paypal"></i>
                            </h4>
                            <div className="my-3" id="paypal-header">
                                <a href="#!">
                                    <img
                                        className="img-fluid d-block mx-auto"
                                        src="/assets/img/logos/cards.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clients;
