import React from 'react';
import { usuario } from '../../usuario';
import { Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import icono1 from "../../assets/icono1.png"
import icono2 from "../../assets/icono2.png"
import useModal from '../../Hooks/useModal';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const StartUser = (props) => {
    const navegar=useNavigate();
    const { open, ShowModal, CloseModal } = useModal()
    //Aqui logica para registrar la venta
    
    const enviarSolicitud = () => {
        event.preventDefault();
        CloseModal();
        Swal.fire("¡Solicitud de venta enviada!", "¡Aguarda un poco! Nuestro equipo revisará tu solicitud. Pronto nos contactaremos contigo!... Mientras a comprar algo no?.", "success")
        
    }
    return (
        <>
            <Container>
                <section className='container'>
                    <h1 className='fs-1 text-center'>¡ Bienvenido {usuario.FullName} !</h1>
                    <h2 className='fs-3 text-center'>¿Que desea hacer el dia de hoy?</h2>
                </section>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center my-5 '>
                        <Col lg={6} md={12} className='my-3 d-flex justify-content-center '>
                            <Button id='BtnAdministrar'onClick={()=>(navegar("/dashboard"))} className='bg-white border rounded'>
                                <Container style={{ with: "160px!important", height: "160px" }}>
                                    <img src={icono1} style={{ objectFit: "contain" }} alt="" />
                                </Container>
                                <span className='text-black' >Ver mis publicaciones</span>
                            </Button>
                        </Col>
                        <Col lg={6} md={12} className='my-3 d-flex justify-content-center '>
                            <Button id='BtnVender' onClick={ShowModal} className='bg-white border rounded'>
                                <Container style={{ with: "160px!important", height: "160px" }}>
                                    <img src={icono2} style={{ objectFit: "contain" }} alt="" />
                                </Container>
                                <span className='text-black'>Vender!</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Modal show={open} onHide={CloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingrese los campos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={enviarSolicitud}>
                        <Row>
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                
                                type="text"
                                placeholder="Pj. Ventilador de pie,celular,auto ..."
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                
                                type="text"
                                placeholder="Pj. 2.000$"
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                
                                type="text"
                                placeholder="Pj. Estado del producto, detalles, especificaciones"
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Imagen del producto</Form.Label>
                            <Form.Control
                                
                                type="file"
                                placeholder="Pj. Ventilador de pie,celular,auto ..."
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mt-4'>
                    <Col className='d-flex justify-content-end'>
                    <Button className=" mx-2" variant="secondary" onClick={CloseModal}>
                        Cancelar
                    </Button>
                    <Button className=" mx-2"variant="primary" type="submit">
                        Enviar solicitud
                    </Button>
                    </Col>
                    </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default StartUser;