import React, { useContext, useEffect } from 'react';
import { Row, Col, Form, Button,Container } from 'react-bootstrap';
import { useForm } from '../../Hooks/useForm';
import { AuthContext } from '../../providers/AuthProvider';

export const Login = () => {
    const { formState, onChangeInput } = useForm();
    const {state, login} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        login(formState);
    }

    useEffect(()=>{
        console.log(state);
    },[state])

    return (
        <Row className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit} className='w-50'>
                <Form.Group as={Row} className='my-3'>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        name="usuario"
                        onChange={onChangeInput}
                    />
                </Form.Group>
                <Form.Group as={Row} className='my-3'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="text"
                        name="contraseña"
                        onChange={onChangeInput}
                    />
                </Form.Group>
                <Row className='my-3'>
                    <Button type="submit">Login</Button>
                </Row>
            </Form>
        </Row>
    );
};