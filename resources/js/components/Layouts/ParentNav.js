import Axios from "axios";
import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { Navbar, NavDropdown, Nav, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ParentNav = forwardRef((props, ref) => {
    const [ cartContent, setCartContent ] = useState([]);
    const [ navbar, setNavbar ] = useState(false);
    const [ userName, setUserName ] = useState('');
    const [ error, setError ] = useState('');
    // constructor(props) {
    //     super(props);
    //     this.handleScroll = this.handleScroll.bind(this);
    //     this.state = {
    //         navbar: false,
    //         isMounted: false,
    //         userName: "",
    //         cartContent: ""
    //     };
    // }

    const handleScroll = e => {
        if (window.scrollY >= 780) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        Axios.get("/user-name").
        then( res => {
            setUserName(res.data);
        })
        .catch( error => {
            setError( error.message );
        });
        Axios.get("/cart")
        .then( res => {
            // console.log(Object.values(res.data).length);
            setCartContent( Object.values(res.data).length )
        })
        .catch( err => {
            setError( err.message );
        });
        // replacing componentWillUnmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

        //update navbar cart count when adding item to cart
    useImperativeHandle (ref, () => ({
        addedToCart () {
            Axios.get("/cart")
            .then( res => {
                setCartContent(Object.values(res.data).length);
            })
            .catch( err => {
                setCartContent( err.message )
            })
        }
    }))

    // addedToCart() {
        // Axios.get("/cart")
        //     .then(res => {
        //         // console.log(Object.values(res.data).length, 'cart');
        //         this.setState({ cartContent: Object.values(res.data).length });
        //     })
        //     .catch(error => {
        //         this.setState({ error: error.response.data.message });
        //     });
    // }

    // componentDidMount() {
    //     window.addEventListener("scroll", this.handleScroll, { passive: true });
    //     this.state.isMounted = true;
    //     Axios.get("/user-name")
    //         .then(res => {
    //             // console.log(res.data);
    //             this.setState({ userName: res.data });
    //         })
    //         .catch(error => {
    //             this.setState({ error: error.response.data.message });
    //         });
    //     Axios.get("/cart")
    //         .then(res => {
    //             // console.log(Object.values(res.data).length, 'cart');
    //             this.setState({ cartContent: Object.values(res.data).length });
    //         })
    //         .catch(error => {
    //             this.setState({ error: error.response.data.message });
    //         });
    // }

    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.handleScroll, {
    //         passive: true
    //     });
    // }

    // render() {
        // const { navbar, cartContent, userName } = this.state;
        return (
            <Navbar
                collapseOnSelect
                expand="lg"
                bg={navbar ? "dark" : "transparent"}
                // bg="dark"
                variant="dark"
                fixed="top"
            >
                {/* {userName ? console.log(userName) : false} */}
                <Navbar.Brand>
                    <Link to="/">GURLS</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Image
                        src="./assets/img/gurls-logo.png"
                        style={{ width: 40, height: 40 }}
                        rounded
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="">TyC</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Link to="/cart" className="mt-2">
                            Carrito{" "}
                            <i
                                className="fa fa-cart-plus"
                                aria-hidden="true"
                            ></i>
                            {cartContent ? (
                                <Badge pill variant="warning">
                                    {cartContent}
                                </Badge>
                            ) : (
                                ""
                            )}
                        </Link>
                        <Nav.Link href="#deets">Contacto</Nav.Link>
                        {userName ? (
                            <NavDropdown
                                title={userName}
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="/log-out">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Nav.Link href="/login">Inicia Sesión</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
                <a
                    href="https://www.instagram.com/veachy_swimwear"
                    className="floating-btn-ig"
                >
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
                <Link to="/cart" className="material-icons floating-btn-cart">
                    <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                    {cartContent ? (
                        <Badge pill variant="warning">
                            {cartContent}
                        </Badge>
                    ) : (
                        ""
                    )}
                </Link>
            </Navbar>
        );
    });
// }

export default ParentNav;
