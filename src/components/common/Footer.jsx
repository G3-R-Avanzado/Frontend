import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';

export const Footer = () => {
    return (
        <Container fluid id="footer"  className="py-5 bg-white">
            <Row className="d-flex justify-content-md-around">
                <Col sm={12} md={12} className='text-center'>
                    <p className="text-center text-black" id="textoFooter">&copy; Todos los derechos Reservados</p>
                </Col>
                <Col sm={12} md={12} className=" text-start " >                    
                <b><a className='text-decoration-none ms-3 text-primary' target="blank"href='https://www.mercadolibre.com.ar/'>Tributo a Mercado Libre</a></b>
                </Col>
            </Row>
        </Container>
        
    );
};
