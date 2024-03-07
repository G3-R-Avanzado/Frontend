import React, { useContext, useEffect } from 'react';
import { Row, Col, Form, Button,Container } from 'react-bootstrap';
import { useForm } from '../../Hooks/useForm';
import { AuthContext } from '../../providers/AuthProvider';

export const Login = () => {
    const { formState, onChangeInput } = useForm();
    const {state, login} = useContext(AuthContext)
console.log("PITO");
    const handleSubmit = (event) => {
        event.preventDefault();
        login(formState);
    }

    useEffect(()=>{
        console.log(state);
    },[state])

    return (
        <Container>
        <Row className=' d-flex justify-content-center'>
            <Form onSubmit={handleSubmit} className='w-50'>
                <Form.Group as={Row} className='my-3'>
                    <Form.Label className='text-start'>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        name="usuario"
                        defaultValue={"g3admin@gmail.com"}
                        onChange={onChangeInput}
                    />
                </Form.Group>
                <Form.Group as={Row} className='my-3'>
                    <Form.Label className='text-start'>Contraseña</Form.Label>
                    <Form.Control
                        type="text"
                        name="contraseña"
                        defaultValue={"g3-admin"}
                        onChange={onChangeInput}
                    />
                </Form.Group>
                <Row className='my-3'>
                    <Button type="submit">Login</Button>
                </Row>
            </Form>
        </Row>
        </Container>
    );
};