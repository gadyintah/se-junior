import React, { useContext } from 'react';
import Logo from '../assets/small-logo.png';
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

import AuthContext from '../context/AuthProvider';

function AppNavbar() {
    const { setAuth } = useContext(AuthContext);
    console.log(setAuth);

    return (
        <Navbar bg="success" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={Logo} alt="logo" /> <span style={{color: '#6ACC00', fontSize: '30px', verticalAlign: 'middle'}}> EDAMAM</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    { (setAuth.accessToken != null) ?
                        <Nav.Link as={ Link } to="/logout">Logout</Nav.Link>
                        :
                        <>
                            <Nav.Link as={ Link } to="/login" className="btn btn-outline-dark bg-success">Login</Nav.Link>
                            <Nav.Link as={ Link } to="/register" className="btn btn-outline-success">Register</Nav.Link>
                        </>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;