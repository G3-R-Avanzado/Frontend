import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="py-5 bg-white">
        <Container >
            <h5 className='text-black text-center'>&copy; Todos los derechos reservados</h5>
            <h6>Tributo a Mercado Pago</h6>
        </Container>
        </footer>
    );
};
export default Footer;