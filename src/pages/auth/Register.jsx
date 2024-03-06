import { Form, Formik } from 'formik';
import React from 'react';
import { Row, Form as FormB, Col, Button } from 'react-bootstrap';
import { validationRegisterUser } from '../../helpers/Helpers';
import { register } from '../../store/slices/auth/authThunks';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


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
        const response = await dispatch(register(event));
    } 

    return (
        <Row className='d-flex justify-content-center'>
            <Formik
                validationSchema={validationRegisterUser}
                onSubmit={handleSubmitFormik}
                initialValues={initialValues}
            >
                {({handleSubmit, handleChange, values, errors, touched})=>(
                    <Form as={Row} className='w-50' onSubmit={handleSubmit}>
                        <FormB.Group>
                            <FormB.Label>Nombre</FormB.Label>
                            <FormB.Control
                                type='text'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                                isInvalid={errors.name && touched.name}
                            />
                            <FormB.Control.Feedback type='invalid'>{errors.name}</FormB.Control.Feedback>
                        </FormB.Group>
                        <FormB.Group>
                            <FormB.Label>Nombre de usuario</FormB.Label>
                            <FormB.Control
                                type='text'
                                name='username'
                                value={values.username}
                                onChange={handleChange}
                                isInvalid={errors.username}
                            />
                            <FormB.Control.Feedback type='invalid'>{errors.username}</FormB.Control.Feedback>
                        </FormB.Group>
                        <FormB.Group>
                            <FormB.Label>Email</FormB.Label>
                            <FormB.Control
                                type='email'
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={errors.email && touched.email}
                            />
                            <FormB.Control.Feedback type='invalid'>{errors.email}</FormB.Control.Feedback>
                        </FormB.Group>
                        <FormB.Group>
                            <FormB.Label>Contraseña</FormB.Label>
                            <FormB.Control
                                type='password'
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={errors.password && touched.password}
                            />
                            <FormB.Control.Feedback type='invalid'>{errors.password}</FormB.Control.Feedback>
                        </FormB.Group>
                        <Button type='submit' className='mt-3'>Registrarse</Button>
                    </Form>
                )}
            </Formik>
            {message && <span className='text-danger'>{message}</span>}        
            <Link to={'/auth/login'}>Login</Link>
        </Row>
    );
};