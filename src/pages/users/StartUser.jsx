import React from 'react';
import { usuario } from '../../usuario';
import { Button,Container,Row,Col } from 'react-bootstrap';
import icono1 from "../../assets/icono1.png"
import icono2 from "../../assets/icono2.png"
const StartUser = (props) => {
    return (
        <>
        <Container>
            <section className='container'>
            <h1 className='fs-1 text-center'>¡ Bienvenido {usuario.FullName} !</h1>
            <h2 className='fs-3 text-center'>¿Que desea hacer el dia de hoy?</h2>
            </section>
            <Container>
            <Row  className='d-flex justify-content-center align-items-center my-5 '>
                <Col lg={6} md={12}  className='my-3 d-flex justify-content-center '>
                    <Button id='BtnAdministrar' className='bg-white border rounded'>
                        <Container style={{with:"160px!important",height:"160px"}}>
                        <img src={icono1}  style={{objectFit:"contain"}} alt="" />
                        </Container>
                        <span className='text-black'>Ver mis publicaciones</span>
                    </Button>
                </Col>
                <Col  lg={6} md={12} className='my-3 d-flex justify-content-center '>
                    <Button id='BtnVender' className='bg-white border rounded'>
                        <Container style={{with:"160px!important",height:"160px"}}>
                            <img src={icono2} style={{objectFit:"contain"}}  alt="" />
                            </Container>
                        <span className='text-black'>Vender!</span>
                    </Button>
                </Col>
            </Row>
            </Container>
        </Container>
        </>
    );
};

export default StartUser;