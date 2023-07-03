import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
    return (
        <Navbar bg="custom" expand="lg" 
        fixed="top" 
        // sticky="top" to make the navbar disappear when scrolling down
        role="navigation">
            <Container fluid className="navbar-menu">
            <Navbar.Brand style={{ color: '#8adbdb', fontSize: "45px", textShadow: "2px 2px 4px #000000"}}  >Bianca Buha</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" style={{ color: 'black' }}>
            <div className="filler"></div>
            <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            navbarScroll>
                <Nav.Link as={NavLink} to="/" style={{ color: '#8adbdb' }}>HOME</Nav.Link>
                <Nav.Link as={NavLink} to="/cv" style={{ color: '#8adbdb' }}>CV</Nav.Link>
                <NavDropdown style={{ color: '#8adbdb' }} title="PROJECTS" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={NavLink} to="/projects/individualprojects">Personal</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/projects/thectrlfreaksteam">
                    The Ctrl Freaks Team
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/projects/codettastoneteam">
                    Codetta Stone Team
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item as={NavLink} to="/projects/project3">
                    Project 3
                    </NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link as={NavLink} to="/contact" style={{ color: '#8adbdb' }}>CONTACT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
</Navbar>
    )
}

export default Navbar1;

