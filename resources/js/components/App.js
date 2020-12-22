import React from "react";
import About from "./Index/About";
import Contact from "./Index/Contact";
import Masthead from "./Index/Masthead";
import PortfolioGrid from "./Index/PortfolioGrid";
import Footer from "./Layouts/Footer";
import ParentNav from "./Layouts/ParentNav";
import Team from "./Index/Team";
import Clients from "./Index/Clients";
import Modal from "./Index/Modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Cart from "./Checkout/Cart";

class App extends React.Component {
    render() {
        return (
            <div>
                <ParentNav />
                <Masthead />
                <PortfolioGrid />
                <About />
                <Team />
                <Clients />
                <Contact />
                <Footer />
                <Modal />
            </div>
        );
    }
}

export default App;

// ReactDOM.render(<App />, document.getElementById("mayki"));
