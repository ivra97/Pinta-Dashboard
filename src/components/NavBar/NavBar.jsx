import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img className="img-logo" src ="/logo.transparente.png" alt="logo de pinta" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/users">Administradores </Nav.Link>
            <Nav.Link className="text-white" href="/baneos">Baneos </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
