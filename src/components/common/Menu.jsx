import React, { useContext, useEffect } from 'react';
import { Nav, Navbar, Container, Image, Form, NavDropdown, Button } from "react-bootstrap"
import Logo from "../../assets/logo1.png"

import { logout } from '../../store/slices/auth/authSlice';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Roles } from '../../type/Type';

const Menu = () => {
    const { isLogged, message, user } = useSelector((store) => store.auth)
    const dispatch = useDispatch()
    const navegar = useNavigate();

    useEffect(() => {
        if (message?.text != null) {
            Swal.fire(`${message.text}`, ``, `${message.type}`);
        }
    }, [message]);
    
    const cerrarSesion = () => {
        dispatch(logout());
        navegar("/public")
    };
    
    return (
        <>
            <Navbar expand="md" className="navbarStyle site-wrap" >
                <Navbar.Brand className='d-flex text-white' >
                    <NavLink className={"text-decoration-none d-flex"} to="/home">
                        <Image src={Logo} style={{ height: "50px" }} alt="" className='mx-2 mt-2 ' roundedCircle />
                        <p className='ms-2 mt-3 text-black fs-5'>TucuLibre </p>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='responsive-navbar-nav'>
                    <Nav className="ms-auto me-5" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavLink end to="/public" className='mx-2 btn-navbar nav-item nav-link ' >Inicio</NavLink>
                        {isLogged ? (
                            <>
                                <NavLink end className='mx-2 btn-navbar nav-item nav-link ' onClick={cerrarSesion} >Cerrar Sesión</NavLink>
                                {user.rol == Roles.Admin ? (
                                    <NavLink end className='mx-2 btn-navbar nav-item nav-link ' to="/admin/dashboard">Administrar</NavLink>
                                ) : (
                                    <NavLink end className='mx-2 btn-navbar nav-item nav-link ' to="/user/dashboard" >Mis publicaciones</NavLink>
                                )}
                            </>
                        ) : (
                            <>
                            <NavLink end to="/public/auth/login" className='mx-2 btn-navbar nav-item nav-link ' >Ingresar</NavLink>
                            <NavLink end to="/public/auth/register" className='mx-2 btn-navbar nav-item nav-link ' >Registrarme</NavLink>
                            </>
                        )}
                        <NavLink end to="/public/contacto" className='mx-2 btn-navbar nav-item nav-link '>Contacto</NavLink>
                        <NavLink end to="/public/ayuda" className='mx-2 btn-navbar nav-item nav-link '>Ayuda</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Menu;