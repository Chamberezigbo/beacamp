import { Container, Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/PUDIO LOGO10.png";

export default function NavbarComponent() {
	return (
		<Container fluid className="nav-bg border-bottom">
			<Navbar bg="light" expand="lg" sticky="top">
				<Container>
					<Navbar.Brand href="#home">
						<img
							src={logo}
							height="24.7"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="#home">Project</Nav.Link>
							<Nav.Link href="#link">Contributors</Nav.Link>
							<Nav.Link href="#link">Mentors</Nav.Link>
						</Nav>
						<Nav className="ms-auto">
							<Button className="buttonColor" size="lg">
								Early Access
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
}
