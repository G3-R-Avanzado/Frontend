import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ImageLogin from '../../assets/login1.png'

const LayoutAuth = ({children}) => {
    return (
        <Container className='d-flex justify-content-center align-items-center px-5'>
            <Col xs={12} md={5} className='d-none d-md-block'>
                <Image src={ImageLogin} fluid />
            </Col>
            <Col xs={12} md={7}>
                {children}
            </Col>
        </Container>
    );
};

export default LayoutAuth;