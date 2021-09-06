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
} from "reactstrap";
import { Link } from "react-router-dom";
import ekaleidoLogo from "../../assets/ekaleido_logo_h.png";

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
                  BLACKBERRYS
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
                  INTERACTIVE Ads
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
                  VIRAL Ads 1
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/dabar">Dabar</Link>
                  </DropdownItem>
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
                    <Link to="/asics_olympics">ASICS Olympics</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/mama_earth">Mama Earth</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/boat">Boat</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/_24seven">24 Seven</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/oppo_days">Oppo Days</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/govo">Govo Earbuds</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/gocrush/">GoCrush</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/envorincs">Envorincs</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/vivo">Vivo</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  VIRAL Ads 2
                </DropdownToggle>
                <DropdownMenu right>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      AMD Ads
                    </DropdownToggle>
                    <DropdownMenu right>
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
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Ghadi Ads
                    </DropdownToggle>
                    <DropdownMenu>
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

                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Blackberry Ads
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <Link to="/blackberrys_one">BLACKBERRYS 1</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/blackberrys_three">BLACKBERRYS 2</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Vega Ads
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <Link to="/vega_women">Vega Women</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/vega">Vega</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      UCOOK
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <Link to="/ucook">Interactive</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/ucook_1">Viral 1</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/ucook_2">Viral 2</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/ucook_3">Viral 3</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomePage;
