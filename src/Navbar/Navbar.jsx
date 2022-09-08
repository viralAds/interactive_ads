import {useState} from "react";
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
	NavItem,
	NavLink,
} from "reactstrap";
import {Link} from "react-router-dom";
import ekaleidoLogo from "../assets/ekaleido_logo_h.png";

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
							<NavItem>
								<NavLink href="/create/link/">CREATE LINK</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									VIRAL Ads 1
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										<Link to="/tasva">Tasva</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/keventers">Keventers</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/hindware">Hindware</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/omega_ad">Omega 1</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/omega_2">Omega 2</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/wildstone">Wildstone</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/wildstone_flipkart">Wildstone 2</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/wildstone_amazon">Wildstone 3</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/boddess">Boddess</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/odonil">Odonil</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/odonil2">Odonil2</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/upes">UPES</Link>
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
										<Link to="/mama_earth">Mama Earth</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/boat">Boat</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/_24seven">24 Seven</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/govo">Govo Earbuds</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/gocrush">GoCrush</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/envorincs">Envorincs</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/vivo">Vivo</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/vstar">VSTAR</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/whywait">WhyWait</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/zandu">Zandu</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/merino_viral_ad_2">Marino 2</Link>
									</DropdownItem>
									<DropdownItem>
										<Link to="/nuovos1">Nuovos 1</Link>
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
												<Link to="/amd_q1_22_component">
													AMD_q1_22
												</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd3">AMD 2022 Jan</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd_premium_sku">
													AMD Premium sku
												</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd300x250">AMD Nov_1</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd320x480">AMD Nov_2</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd">AMD</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd_interactive">
													AMD Interactive
												</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd_desire">AMD Desire</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd_flipkart">AMD Flipkart</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd_amazon">AMD Amazon</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd_merc_q2_2021">
													AMD Merc Q2 2021
												</Link>
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
												<Link to="/amdf1">AMD F1</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/carousel_amd">
													AMD Double box carousel
												</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Bharatpe
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/bharatpe">Bharatpe</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bharatpe2">BharatPe2</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bharatpe3">Bharatpe3</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bharatpe4">Bharatpe4</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Audientes
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/audientes">Audientes</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/audientes_2">Audientes Two</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											ASICS
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/asics">ASICS</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/asics_olympics">
													ASICS Olympics
												</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											OPPO
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/oppo_days">Oppo Days</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Dabur
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/dabur">Dabur 1</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/dabur2">Dabur 2</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/dabur3">Dabur 3</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/dabur_c">Dabur 4</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Whywait
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem>
												<Link to="/whywait">Whywait 1</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/whywait2">Whywait 2</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/w2viral">Why Wait viral</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Bodyshop
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem>
												<Link to="/bodyshop">BodyShop</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bodyshop2">BodyShop2</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bodyshop3">BodyShop3</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bodyshop4">BodyShop4</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bodyshop5">BodyShop5</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bodyshop6">BodyShop6</Link>
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
												<Link to="/blackberrys_one">
													BLACKBERRYS 1
												</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/blackberrys_three">
													BLACKBERRYS 2
												</Link>
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
											<DropdownItem>
												<Link to="/360x640/ht/vega_two/">Vega</Link>
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
											<DropdownItem>
												<Link to="/ucook_i">Viral I</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								</DropdownMenu>
							</UncontrolledDropdown>

							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Parallax Ads
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										<Link to="/merino_viral_ad_1">Marino 1</Link>
									</DropdownItem>
									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Panasonic
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/panasonic_jun_22">
													Panasonic 1
												</Link>
												<Link to="/panasonic_jul_22">
													Panasonic 2
												</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Odomos
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/odomos1">Odomos 1</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Samsung
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/samsungs22">Samsung</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/samsungs22ultra">
													Samsung Ultra
												</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Bank Se
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/bankse">Bank Se</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bankse2">Bank Se 2</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Odonil
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/odonil">Odonil March</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/odonil2">Odonil 2</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Wildstone
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/wildstone_flipkart">
													Wildstone Flipkart
												</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/wildstone_amazon">
													Wildstone Ammazon
												</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/code-wildstone">
													CODE Wildstone
												</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/code_jun_22">Code Jun_22</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Park Plus
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/parkplus">Park Plus 1</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/parkplus2">Park Plus 2</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/parkplus3">Park Plus 3</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Amd
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/amd_pitch1">Amd 1</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd_pitch_2">Amd 2</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/amd_sep">Amd September</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Blackberrys
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/blackberrys_apr22">
													BB Apr 22
												</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bb-jun22-interactive">
													BB June 22
												</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bb_techpro">BB TechPro</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bb_isf">BB ISF 1</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/bb_isf2">BB ISF 2</Link>
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>

									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											Adda 52
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>
												<Link to="/adda52">Adda 52-1</Link>
											</DropdownItem>
											<DropdownItem>
												<Link to="/adda52_2">Adda 52-2</Link>
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
