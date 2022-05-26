import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import BSNavbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";


export default function Navbar({ user }) {
    const location = useLocation()
    console.log(location)
    return (
        <BSNavbar bg="light" expand="lg">
            <Container>
                <BSNavbar.Brand>J.D Bank</BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={location.pathname === "/" ? "active" : ""} as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link className={location.pathname === "/CreateAccount" ? "active" : ""} as={Link} to="/CreateAccount">
                            Create Account
                        </Nav.Link>
                        {user !== undefined && <>
                            <Nav.Link className={location.pathname === "/Deposits" ? "active" : ""} as={Link} to="/Deposits">
                                Deposit
                            </Nav.Link>
                            <Nav.Link className={location.pathname === "/Withdraw" ? "active" : ""} as={Link} to="/Withdraw">
                                Withdraw
                            </Nav.Link>
                        </>}
                        <Nav.Link className={location.pathname === "/AllData" ? "active" : ""} as={Link} to="/AllData">
                            All Data
                        </Nav.Link>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
}