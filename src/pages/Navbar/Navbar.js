import React, { useState } from 'react';
import './Navbar.scss';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

import { Link } from 'react-router-dom';
import ekaleidoLogo from '../../assets/ekaleido_logo_h.png';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <Container>
          <NavbarBrand href="/"><img src={ ekaleidoLogo } alt="logo" width='35' /></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/mercedes">MERCEDES</Link>
              </NavItem>
              <NavItem>
                <Link to="/omega">OMEGA</Link>
              </NavItem>
              <NavItem>
                <Link to="/blackberrys">BLACKBERRYS</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default HomePage
