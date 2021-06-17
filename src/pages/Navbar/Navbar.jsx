import React, { useState } from "react";
import "./Navbar.scss";

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
  // Button
} from "reactstrap";

import { Link } from "react-router-dom";
import ekaleidoLogo from "../../assets/ekaleido_logo_h.png";

// export function logout() {
//   return false
// }

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

 
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={ekaleidoLogo} alt="logo" width="35" />
          </NavbarBrand>
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
                  <DropdownItem>
                    <Link to="/wedding_collection3">WEDDING LOOKS 2</Link>
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
                    <Link to="/oppo">OPPO Find X3 Pro</Link>
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
                    <Link to="/asics">ASICS</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/blackberrys_one">BLACKBERRYS 1</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/blackberrys_three">BLACKBERRYS 2</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/amd">AMD</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/amd_flipkart">AMD Flipkart</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/amd_amazon">AMD Amazon</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/amd_merc_q2_2021">AMD Merc Q2 2021</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/amd_merc_300x250_q2_2021">
                      AMD Merc 300x250 Q2 2021
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/amd_q2_commercials_320x480">
                      AMD Q2 Commercials 320x480
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/amd_q2_commercials_320x480_2">
                      AMD Q2 Commercials 320x480_2
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/amd_f1">AMD F1</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/_24seven">24 Seven</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/ghadi">Ghadi</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/ghadi_2">Ghadi Option 2</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/ghadi_3">Ghadi Option 3</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <Button className="logout" onClick={logout}>
                LOGOUT
              </Button> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomePage;
