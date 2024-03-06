import React, { useContext, useEffect } from 'react';
import { Row, Col, Form, Button,Container } from 'react-bootstrap';
import { useForm } from '../../Hooks/useForm';

import { useDispatch } from 'react-redux';
import { getLogin } from '../../store/slices/auth/authThunks';


export const Login = () => {
    const { formState, onChangeInput } = useForm();

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(
            getLogin(formState.email, formState.password)
        )
    }

    return (
        <Row className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit} className='w-50'>
                <Form.Group as={Row} className='my-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        onChange={onChangeInput}
                    />
                </Form.Group>
                <Form.Group as={Row} className='my-3'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="text"
                        name="password"
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