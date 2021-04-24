import React, { useState } from 'react';
import './Navbar.scss';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  BLACKBERRYS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/blackberrys">BLACKBERRYS</Link> 
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/blackberrys_one">BLACKBERRYS 1</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/blackberrys_two">BLACKBERRYS 2</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/blackberrys_three">BLACKBERRYS 3</Link>
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default HomePage
