import React, { useState } from 'react';
import './Navbar.scss';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
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

            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  WEDDING COLLECTION
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/blackberrys">INTERACTIVE VIDEO 1</Link> 
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/wedding_collection2">INTERACTIVE VIDEO 2</Link> 
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/wedding_collection1">WEDDING LOOKS</Link>
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  INTERACTIVE VIDEOS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/blackberrys">BLACKBERRYS</Link> 
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/blackberrys_two">BLACKBERRYS 2</Link> 
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/mercedes">MERCEDES</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/omega">OMEGA</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/poco">POCO</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/swap">SWAP</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/play">HOTSPOT</Link>
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  VIRAL ADS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/panasonic">PANASONIC</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/philips">PHILIPS</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/clark">CLARKS</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/jnto">JNTO</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/blackberrys_one">BLACKBERRYS 1</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="/blackberrys_three">BLACKBERRYS 2</Link>
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