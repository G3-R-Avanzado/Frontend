import React from 'react';
import { Nav, Navbar, Container, Image, Form, NavDropdown,Button } from "react-bootstrap"
import Logo from "../../assets/logo1.png"
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Menu = (props) => {
    return (
        <>
            <Navbar expand="md" className="navbarStyle site-wrap" >
                    <Navbar.Brand  className='d-flex text-white'>
                        <Image src={Logo} style={{ height: "50px" }} alt="" className='mx-2 mt-2 ' roundedCircle />
                        <p className='ms-2 mt-3 text-black fs-5'>TucuLibre </p>
                    </Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbarScroll" className='responsive-navbar-nav'>
                        <Nav className="ms-auto me-5"style={{ maxHeight: '100px' }} navbarScroll>
                            <NavLink end to="/home"className='mx-2 nav-item nav-link ' >Inicio</NavLink>
                            {
                                props.isLogged?
                                <NavLink end to="/auth/"className='mx-2 nav-item nav-link ' >Cerrar Sesión</NavLink>
                                :
                                <NavLink end to="/login"className='mx-2 nav-item nav-link ' >Ingresar</NavLink>
                            }
                            <NavLink end to=""className='mx-2 nav-item nav-link ' >Contacto</NavLink>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Menu;