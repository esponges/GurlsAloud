import React from "react";
import { Link } from "@reach/router";

class Navbar extends React.Component {
    render () {
        return (
            <nav className="navbar mainNav navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <Link
                        className="navbar-brand js-scroll-trigger"
                        to={'/'}
                    >
                        <u>Gurls</u>
                    </Link>
                    <button
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fas fa-bars ml-1"></i>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarResponsive"
                    >
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <Link className="nav-link" to={"/cart"}>
                                Cart
                            </Link>
                            <li className="nav-item">
                                <a
                                    className="nav-link js-scroll-trigger"
                                    href="#about"
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link js-scroll-trigger"
                                    href="#team"
                                >
                                    Team
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link js-scroll-trigger"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
};

export default Navbar;
