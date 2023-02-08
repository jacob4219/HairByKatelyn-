import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const SiteMenu = () => {
    const [expanded, setExpanded] = useState(false);
  
    return (
      <Navbar expanded={expanded} collapseOnSelect expand="xl" bg="light" variant="light">
        <Container>
          <Navbar.Brand><Link to="/" onClick={() => setExpanded(false)}>Hair By Katelyn</Link></Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/portfolio" onClick={() => setExpanded(false)}>Portfolio</Link>
              <Link to="/services" onClick={() => setExpanded(false)}>Services</Link>
              <Link to="/book" onClick={() => setExpanded(false)}>Book</Link>
              <Link to="/promotions" onClick={() => setExpanded(false)}>Promotions</Link>
              <Link to="/contact" onClick={() => setExpanded(false)}>Contact</Link>
              <Link to="/store" onClick={() => setExpanded(false)}>Store</Link>
              <Link to="/cancellation" onClick={() => setExpanded(false)}>Cancellation Policy</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  

export default SiteMenu;




