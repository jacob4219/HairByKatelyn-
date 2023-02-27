import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const SiteMenu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="social-icons-mobile">
        <a href="https://www.facebook.com/katelynbirkyhairstylist" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/katelynbirkyhairstylist/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.tiktok.com/@hairbykatelynbirky" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
      <Navbar expanded={expanded} collapseOnSelect expand="xl" bg="light" variant="light">
        <Container>
          <Navbar.Brand><Link to="/" onClick={() => setExpanded(false)}>Hair By Katelyn</Link></Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home" onClick={() => setExpanded(false)}>Home</Link>
              <Link to="/book" onClick={() => setExpanded(false)}>Book</Link>
              <Link to="/services" onClick={() => setExpanded(false)}>Services</Link>
              
              <Link to="/portfolio" onClick={() => setExpanded(false)}>Portfolio</Link>
              {/* <Link to="/promotions" onClick={() => setExpanded(false)}>Promotions</Link> */}
              <Link to="/contact" onClick={() => setExpanded(false)}>Contact</Link>
              {/* <Link to="/store" onClick={() => setExpanded(false)}>Store</Link> */}
              <Link to="/cancellation" onClick={() => setExpanded(false)}>Cancellation</Link>
            </Nav>
            <div className="social-icons-desktop">
              <a href="https://www.facebook.com/katelynbirkyhairstylist" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/katelynbirkyhairstylist/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.tiktok.com/@hairbykatelynbirky" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default SiteMenu;