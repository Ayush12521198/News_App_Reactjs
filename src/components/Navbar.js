
import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import logoImage from './logoImage.png'
const Navbar = () => {
    return (
      <div>
        <BootstrapNavbar fixed="top" expand="lg" bg="dark" variant="dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
            <img src={logoImage} alt="Logo" className="logo" style={{width:"30px", height:"28px",marginBottom:"8px"}}/>
              NeighborgoodNews
            </NavLink>
            <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
            <BootstrapNavbar.Collapse id="navbarSupportedContent">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/business" exact>Business</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/entertainment" exact>Entertainment</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/health" exact>Health</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/science" exact>Science</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/sports" exact>Sports</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/technology" exact>Technology</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </BootstrapNavbar.Collapse>
          </div>
        </BootstrapNavbar>
      </div>
    );
}

export default Navbar;
