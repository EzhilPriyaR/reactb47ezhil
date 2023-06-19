import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import logo from "./../Images/logo.jpg"

class NavigationBar extends Component {

    handleClick(cart, updateCart, setBtnEnabled, btnName) {
        cart = 0;
        updateCart(cart);
        setBtnEnabled(() => ({
            btnName: false,
        }));
    }

    render() {
        const buttonStyle = {
            width: 100,
        }
        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand><img alt="logo" src={logo} width="30" height="30" className="d-inline-block align-top" />FRESHY FRUITS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="me-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item>Item List</NavDropdown.Item>
                                <NavDropdown.Item>Selected Item</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Item Details</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                            <Button variant="outline-success" onClick={() => this.handleClick(this.props.cart, this.props.updateCart, this.props.setBtnEnabled, this.props.btnName)} style={buttonStyle}>{this.props.cart} <Cart /></Button>
                        </Form>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default NavigationBar;