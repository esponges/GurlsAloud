import React from "react";

class Team extends React.Component {
    render() {
        return (
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">
                            Our Amazing Team
                        </h2>
                        <h3 className="section-subheading text-muted">
                            Lorem ipsum dolor sit amet consectetur.
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team-member">
                                <img
                                    className="mx-auto rounded-circle"
                                    src="http://127.0.0.1:8000/assets/img/team/maykin.jpg"
                                    alt=""
                                />
                                <h4>Maykin Guapin</h4>
                                <p className="text-muted">
                                    Te toma tus fotos sepsis
                                </p>
                                <a
                                    className="btn btn-dark btn-social mx-2"
                                    href="#!"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    className="btn btn-dark btn-social mx-2"
                                    href="#!"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    className="btn btn-dark btn-social mx-2"
                                    href="#!"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Aut eaque, laboriosam
                                veritatis, quos non quis ad perspiciatis, totam
                                corporis ea, alias ut unde.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;
