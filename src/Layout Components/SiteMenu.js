import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const SiteMenu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to="/" onClick={() => setExpanded(false)}>Hair By Katelyn</Link></Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/portfolio" onClick={() => setExpanded(false)}>Portfolio</Link></Nav.Link>
            <Nav.Link><Link to="/services" onClick={() => setExpanded(false)}>Services</Link></Nav.Link>
            <Nav.Link><Link to="/book" onClick={() => setExpanded(false)}>Book</Link></Nav.Link>
            <Nav.Link><Link to="/promotions" onClick={() => setExpanded(false)}>Promotions</Link></Nav.Link>
            <Nav.Link><Link to="/contact" onClick={() => setExpanded(false)}>Contact</Link></Nav.Link>
            <Nav.Link><Link to="/store" onClick={() => setExpanded(false)}>Store</Link></Nav.Link>
            <Nav.Link><Link to="/cancellation" onClick={() => setExpanded(false)}>Cancellation Policy</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteMenu;




