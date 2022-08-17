import React, { useContext } from 'react';
import Logo from '../assets/small-logo.png';
// import Login from './Login';
// import Logout from './Logout';
// import Register from './Register';
// import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

import AuthContext from '../context/AuthProvider';

function AppNavbar() {
    const { setAuth } = useContext(AuthContext);
    console.log('Set auth: ' + setAuth?.accessToken ?? "auth not defined");

    const test = "null";

    return (
        <Navbar bg="success" expand="lg">
            <Container>
                { (test != null) ?
                    <Navbar.Brand href="/home"><img src={Logo} alt="logo" /> <span style={{color: '#6ACC00', fontSize: '30px', verticalAlign: 'middle'}}> EDAMAM</span></Navbar.Brand>
                    :
                    <>
                        <Navbar.Brand href="/"><img src={Logo} alt="logo" /> <span style={{color: '#6ACC00', fontSize: '30px', verticalAlign: 'middle'}}> EDAMAM</span></Navbar.Brand>
                    </>
                }
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    { (test != null) ?
                        <Nav.Link href="/logout"><b>Logout</b></Nav.Link>
                        :
                        <>
                            <Nav.Link href="/login" className="btn bg-success"><b>Login</b></Nav.Link>
                            <Nav.Link href="/register" className="btn bg-success"><b>Register</b></Nav.Link>
                        </>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;