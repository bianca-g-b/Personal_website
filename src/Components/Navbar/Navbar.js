import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
    return (
        <Navbar bg="custom" expand="lg" 
        fixed="top" role="navigation">
            <Container fluid className="navbar-menu">
            <Navbar.Brand style={{ color: '#8adbdb', fontSize: "45px"}}  >Bianca Buha</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <div className="filler"></div>
            <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            navbarScroll>
                <Nav.Link as={NavLink} to="/" style={{ color: '#8adbdb' }}>HOME</Nav.Link>
                <Nav.Link as={NavLink} to="/about" style={{ color: '#8adbdb' }}>ABOUT</Nav.Link>
                <Nav.Link as={NavLink} to="/cv" style={{ color: '#8adbdb' }}>CV</Nav.Link>
                <NavDropdown as={NavLink} to="/projects" style={{ color: '#8adbdb' }} title="PROJECTS" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={NavLink} to="/projects/project1">Project 1</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/projects/project2">
                    Project 2
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/projects/project3">
                    Project 3
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to="/contact" style={{ color: '#8adbdb' }}>CONTACT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
</Navbar>
    )
}

export default Navbar1;

