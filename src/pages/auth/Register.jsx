import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Row, Form as FormB, Col, Button } from 'react-bootstrap';
import { validationRegisterUser } from '../../helpers/Helpers';
import { register } from '../../store/slices/auth/authThunks';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { messageError } from '../../store/slices/auth/authSlice';
import LayoutAuth from './LayoutAuth';


export const Register = () => {
    const dispatch = useDispatch();
    const {message} = useSelector((store)=>store.auth)

    const initialValues = {
        name: '',
        username: '',
        email: '',
        password: ''
    }

    const handleSubmitFormik = async (event) => {
        const response = dispatch(register(event));
    } 

    const refreshMessageError = () => {
        message != null && dispatch(messageError({message:null}))
    }

    return (
        <LayoutAuth>
            <Formik
                validationSchema={validationRegisterUser}
                onSubmit={handleSubmitFormik}
                initialValues={initialValues}>
                {({handleSubmit, handleChange, values, errors, touched})=>(
                    <Form onSubmit={handleSubmit}>
                        <FormB.Group as={Row}>
                            <FormB.Label>Nombre</FormB.Label>
                            <FormB.Control
                                type='text'
                                name='name'
                                value={values.name}
                                onChange={(event)=>{handleChange(event); refreshMessageError();}}
                                isInvalid={errors.name && touched.name}
                            />
                            <FormB.Control.Feedback type='invalid'>{errors.name}</FormB.Control.Feedback>
                        </FormB.Group>
                        <FormB.Group as={Row}>
                            <FormB.Label>Nombre de usuario</FormB.Label>
                            <FormB.Control
                                type='text'
                                name='username'
                                value={values.username}
                                onChange={(event)=>{handleChange(event); refreshMessageError();}}
                                isInvalid={errors.username && touched.username}
                            />
                            <FormB.Control.Feedback type='invalid'>{errors.username}</FormB.Control.Feedback>
                        </FormB.Group>
                        <FormB.Group as={Row}>
                            <FormB.Label>Email</FormB.Label>
                            <FormB.Control
                                type='email'
                                name='email'
                                value={values.email}
                                onChange={(event)=>{handleChange(event); refreshMessageError();}}
                                isInvalid={errors.email && touched.email}
                            />
                            <FormB.Control.Feedback type='invalid'>{errors.email}</FormB.Control.Feedback>
                        </FormB.Group>
                        <FormB.Group as={Row}>
                            <FormB.Label>Contraseña</FormB.Label>
                            <FormB.Control
                                type='password'
                                name='password'
                                value={values.password}
                                onChange={(event)=>{handleChange(event); refreshMessageError();}}
                                isInvalid={errors.password && touched.password}
                            />
                            <FormB.Control.Feedback type='invalid'>{errors.password}</FormB.Control.Feedback>
                        </FormB.Group>
                        
                        <Row>
                            <Button type='submit' className='mt-3'>Registrarse</Button>
                            {message && <span className='text-danger'>{message?.text}</span>}
                        </Row>
                        
                        <Row className='text-center'>        
                            <Link to={'/auth/login'}>Login</Link>
                        </Row>
                    </Form>
                )}
            </Formik>
            
            
        </LayoutAuth>
    );
};