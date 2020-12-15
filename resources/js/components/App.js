import React from "react";
import ReactDOM from "react-dom";
import About from "./Index/About";
import Contact from "./Index/Contact";
import Masthead from "./Index/Masthead";
import PortfolioGrid from "./Index/PortfolioGrid";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";
import Team from "./Index/Team";
import Clients from "./Index/Clients";
import Modal from "./Index/Modal";

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
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

// ReactDOM.render(<App />, document.getElementById("app"));
