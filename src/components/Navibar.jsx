import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Navbar,Nav} from 'react-bootstrap';
function Navibar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/shop">Shop</Link>
            <Link className="nav-link" to="/wishlist">Wishlist</Link>
            <Link className="nav-link" to="/checkout">Checkout</Link>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default Navibar;