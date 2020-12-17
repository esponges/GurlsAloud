import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "@reach/router";

class ParentNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            navbar: false
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {passive: true});
    }

    handleScroll (e) {
        // console.log(window.scrollY);
        if (window.scrollY >= 80) {
            this.setState({
                navbar: true
            })
        } else {
            this.setState({
                navbar: false
            })
        }
    }

    render() {
        return (
            <Navbar
                collapseOnSelect
                expand="lg"
                bg={this.state.navbar ? 'dark' : 'transparent'}
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
                            <i className="fa fa-cart-plus" aria-hidden="true"></i>{" "}
                        </Link>
                        <Nav.Link href="#deets">Contacto</Nav.Link>
                        <Nav.Link href="/login">Inicia Sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default ParentNav;
