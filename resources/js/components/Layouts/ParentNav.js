import Axios from "axios";
import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
// import { Link } from "@reach/router";
import { Link } from "react-router-dom";

class ParentNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            navbar: false,
            isMounted: false,
            userName: "",
        };
    }

    // isLoggedIn () {
    //     Axios.get("http://127.0.0.1:8000/user").then((res) => {
    //         this.setState({
    //             userName: res.data
    //         }).catch((error) => {
    //             this.setState({
    //                 error: error.res.data.message
    //             });
    //         });
    //     });
    //     console.log(userName);
    // }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll, { passive: true });
        this.state.isMounted = true;
        Axios.get("http://127.0.0.1:8000/user-name").then(res => {
            console.log(res.data);
            this.setState({userName: res.data });
        }).catch(error => {
            this.setState({error: error.response.data.message})
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll, {
            passive: true
        });
    }

    handleScroll(e) {
        // console.log(window.scrollY);
        if (window.scrollY >= 80) {
            this.setState({
                navbar: true
            });
        } else {
            this.setState({
                navbar: false
            });
        }
    }

    render() {
        return (
            <Navbar
                collapseOnSelect
                expand="lg"
                bg={this.state.navbar ? "dark" : "transparent"}
                variant="dark"
                fixed="top"
            >
                <Navbar.Brand>
                    <Link to="/">GURLS</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        {/* <NavDropdown
                            title="Dropdown"
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Link to="/cart" className="mt-2">
                            Carrito{" "}
                            <i
                                className="fa fa-cart-plus"
                                aria-hidden="true"
                            ></i>{" "}
                        </Link>
                        <Nav.Link href="#deets">Contacto</Nav.Link>
                        {this.state.userName != "" ? (
                            <NavDropdown
                                title={this.state.userName}
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="/log-out">Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Nav.Link href="/login">Inicia Sesión</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default ParentNav;
