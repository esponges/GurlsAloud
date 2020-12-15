import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">
                                Contact Us
                            </h2>
                            <h3 className="section-subheading text-muted">
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                        </div>
                        <form
                        >
                            <div className="row align-items-stretch mb-5">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            id="name"
                                            type="text"
                                            placeholder="Your Name *"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            id="email"
                                            type="email"
                                            placeholder="Your Email *"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group mb-md-0">
                                        <input
                                            className="form-control"
                                            id="phone"
                                            type="tel"
                                            placeholder="Your Phone *"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-textarea mb-md-0">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            placeholder="Your Message *"
                                        ></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div id="success"></div>
                                <button
                                    className="btn btn-primary btn-xl text-uppercase"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;
