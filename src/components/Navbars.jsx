import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import "./Navbar.css";


const Navbars = () => {
  return (
    <>
    <Navbar className="navbar-menu">
      <Container>
        <Navbar.Brand>
          <img 
          src="/images/logo.svg"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link>Our Services</Nav.Link>
            <Nav.Link>Why Us</Nav.Link>
            <Nav.Link>Testimonial</Nav.Link>
            <Nav.Link>FAQ</Nav.Link>
            <Button className="button-register">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbars;