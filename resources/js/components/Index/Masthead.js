import React from "react";
import ReactDOM from "react-dom";

class Masthead extends React.Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container">
                        <div className="masthead-subheading">
                            Welcome To Our Studio!
                        </div>
                        <div className="masthead-heading text-uppercase">
                            Gurls Aloud
                        </div>
                        <a
                            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                            href="#services"
                        >
                            Purchase
                        </a>
                    </div>
                </header>
            </div>
        );
    }
}

export default Masthead;
