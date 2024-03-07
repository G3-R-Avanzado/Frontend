import React from 'react';
import { usuario } from '../../usuario';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import icono1 from "../../assets/icono1.png"
import icono2 from "../../assets/icono2.png"
import useModal from '../../Hooks/useModal';

const StartUser = (props) => {
    const { open, ShowModal, CloseModal } = useModal()

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
                            <Button id='BtnAdministrar' className='bg-white border rounded'>
                                <Container style={{ with: "160px!important", height: "160px" }}>
                                    <img src={icono1} style={{ objectFit: "contain" }} alt="" />
                                </Container>
                                <span className='text-black'>Ver mis publicaciones</span>
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
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={CloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={{}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default StartUser;