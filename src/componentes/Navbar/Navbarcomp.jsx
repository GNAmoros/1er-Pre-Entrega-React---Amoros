import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import CartWidget from '../cartWidget/cartWidget';

export default class Navbarcomp extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand href="#">PadelPro</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Palas</Nav.Link>
                                <Nav.Link href="#action2">Indumentaria</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Buscar</Button>
                            </Form>
                            {/* CartWidget */}
                            <CartWidget addToCart={this.addToCart} removeFromCart={this.removeFromCart} />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}