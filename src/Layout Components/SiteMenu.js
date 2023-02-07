// import React from 'react';
// import { Link } from 'react-router-dom';

// const SiteMenu = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/book">Book</Link></li>
//         <li><Link to="/cancellation">Cancellation Policy</Link></li>
//         <li><Link to="/portfolio">Portfolio</Link></li>
//         <li><Link to="/promotions">Promotions</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/store">Store</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default SiteMenu;

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const SiteMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><Link to="/">Hair By Katelyn</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>
          
          <Nav.Link><Link to="/services">Services</Link></Nav.Link>
          <Nav.Link><Link to="/book">Book</Link></Nav.Link>
          <Nav.Link><Link to="/promotions">Promotions</Link></Nav.Link>
          <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
          <Nav.Link><Link to="/store">Store</Link></Nav.Link>
          <Nav.Link style={{ whiteSpace: 'nowrap' }}><Link to="/cancellation">Cancellation Policy</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SiteMenu;
