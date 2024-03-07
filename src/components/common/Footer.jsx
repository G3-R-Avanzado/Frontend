import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer id="footer"  className="py-5 bg-secondary">
            <Row className="d-flex justify-content-md-around">
                <Col sm={12} md={12} className='text-center'>
                    <p className="text-center text-light" id="textoFooter">&copy; Todos los derechos Reservados</p>
                </Col>
                <Col sm={12} md={12} className=" " >                    
                <b><a className='text-decoration-none ms-3 text-white' target="blank"href='https://www.mercadolibre.com.ar/'>Tributo a Mercado Libre</a></b>
                </Col>
            </Row>
        </footer>
        
    );
};
export default Footer;