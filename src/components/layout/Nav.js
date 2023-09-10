import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		<Navbar bg="light" expand="lg">
<Container>
  <Navbar.Brand href="/">FlowerPower</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
	<Nav className="ml-auto">
			<Nav.Link href="/">Home</Nav.Link>
			{auth ? (
				<>
					<Nav.Link href="/login"><button onClick={logout} className="log-out">Log out</button></Nav.Link> 
				</>
			) : (
				<Nav.Link href="/login">Login</Nav.Link>
			)}
			<Nav.Link href="/contact">Contact</Nav.Link> 
			</Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
	);
}

export default NavigationBar;




