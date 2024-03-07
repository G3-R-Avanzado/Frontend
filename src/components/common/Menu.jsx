import React, { useContext,useEffect } from 'react';
import { Nav, Navbar, Container, Image, Form, NavDropdown,Button } from "react-bootstrap"
import Logo from "../../assets/logo1.png"
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const Menu = (props) => {

    const {state,logout} = useContext(AuthContext);
    
    useEffect(() => {
        if (state.message) {
            Swal.fire(`${state.message}`, ``, 'success');
        }
    }, [state.message]);

    const cerrarSesion = () => {
        logout();
    };
    return (
        <>
            <Navbar expand="md" className="navbarStyle site-wrap" >
                    <Navbar.Brand  className='d-flex text-white' >
                        <NavLink className={"text-decoration-none d-flex"} to="/home">
                        <Image src={Logo} style={{ height: "50px" }} alt="" className='mx-2 mt-2 ' roundedCircle />
                        <p className='ms-2 mt-3 text-black fs-5'>TucuLibre </p>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='responsive-navbar-nav'>
                        <Nav className="ms-auto me-5"style={{ maxHeight: '100px' }} navbarScroll>
                            <NavLink end to="/home"className='mx-2 btn-navbar nav-item nav-link ' >Inicio</NavLink>
                            {
                                props.isLogged?
                                <NavLink end className='mx-2 btn-navbar nav-item nav-link ' onClick={cerrarSesion} >Cerrar Sesión</NavLink>
                                :
                                <NavLink end to="/login"className='mx-2 btn-navbar nav-item nav-link ' >Ingresar</NavLink>
                            }
                            <NavLink end to="/"className='mx-2 btn-navbar nav-item nav-link ' >Contacto</NavLink>
                            <NavLink end to="/"className='mx-2 btn-navbar nav-item nav-link ' >Ayuda</NavLink>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Menu;