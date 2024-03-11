import React, { useContext, useEffect } from 'react';
import { Nav, Navbar, Container, Image, Form, NavDropdown, Button } from "react-bootstrap"
import Logo from "../../assets/logo1.png"
import { logout } from '../../store/slices/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Menu = (props) => {
    const { isLogged, message,rol } = useSelector((store) => store.auth)
    const dispatch = useDispatch()
    const navegar = useNavigate();
    
    useEffect(() => {
        if (message) {
            Swal.fire(`${message.text}`, ``, `${message.type}`);
        }
    }, [message]);
    const cerrarSesion = () => {
        dispatch(logout());
        navegar("/")
    };
    useEffect(() => {
        console.log(rol)
        console.log(isLogged)
    }, [rol])
    
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
                        <NavLink end to="/" className='mx-2 btn-navbar nav-item nav-link ' >Inicio</NavLink>
                        {isLogged ? (
                            <>
                                <NavLink end className='mx-2 btn-navbar nav-item nav-link ' onClick={cerrarSesion} >Cerrar Sesión</NavLink>
                                {rol == "admin" ? (
                                    <NavLink end className='mx-2 btn-navbar nav-item nav-link ' to="/Admin/Dashboard" >Administrar</NavLink>
                                ) : (
                                    <NavLink end className='mx-2 btn-navbar nav-item nav-link ' to="/User/Dashboard" >Mis publicaciones</NavLink>
                                )}
                            </>
                        ) : (
                            <NavLink end to="/login" className='mx-2 btn-navbar nav-item nav-link ' >Ingresar</NavLink>
                        )}
                        <NavLink end to="" className='mx-2 btn-navbar nav-item nav-link ' >Contacto</NavLink>
                        <NavLink end to="" className='mx-2 btn-navbar nav-item nav-link ' >Ayuda</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Menu;