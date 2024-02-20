import React from 'react';
import { Nav, Navbar, Container, Image, Form, NavDropdown,Button } from "react-bootstrap"
import Logo from "../../assets/logo1.png"
const Menu = () => {
    return (
        <>
            <Navbar expand="md" className="navbarStyle" fixed='top'>
                <Container fluid>
                    <Navbar.Brand  className='d-flex text-white'>
                        <Image src={Logo} style={{ height: "50px" }} alt="" className='mx-2 mt-2' roundedCircle />
                        <p className='ms-2 mt-3 text-black fs-5'>TucuLibre </p>
                    </Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbarScroll" className='responsive-navbar-nav'>
                        <Nav className="ms-auto"style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#inicio"className='text-black' >Inicio</Nav.Link>
                            <Nav.Link href="#contacto"className='text-black' >Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;