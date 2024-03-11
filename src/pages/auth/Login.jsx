import React, { useContext, useEffect } from 'react';
import { Row, Col, Form, Button,Container } from 'react-bootstrap';
import { useForm } from '../../Hooks/useForm';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../store/slices/auth/authThunks';


export const Login = () => {
    const { formState, onChangeInput } = useForm();
    const {message} = useSelector((store)=>store.auth)
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            getLogin(formState.email, formState.password)
        )
    }

    return (
        <Container>
        <Row className=' d-flex justify-content-center'>
            <Form onSubmit={handleSubmit} className='w-50'>
                <Form.Group as={Row} className='my-3'>
                    <Form.Label className='text-start'>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        defaultValue={"g3admin@gmail.com"}
                        onChange={onChangeInput}
                    />
                </Form.Group>
                <Form.Group as={Row} className='my-3'>
                    <Form.Label className='text-start'>Contraseña</Form.Label>
                    <Form.Control
                        type="text"
                        name="password"
                        defaultValue={"g3-admin"}
                        onChange={onChangeInput}
                    />
                </Form.Group>
                <Row className='my-3'>
                    <Button type="submit">Login</Button>
                    {message && (<span className='text-danger'>{message.text}</span>)}
                </Row>
                <Link to={'/auth/register'}>Registrarse</Link>
            </Form>
        </Row>
        </Container>
    );
};