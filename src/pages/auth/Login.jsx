import React, { useContext, useEffect } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../store/slices/auth/authThunks';
import LayoutAuth from './LayoutAuth.jsx'
import { Formik } from 'formik';
import { validationAuthUser } from '../../helpers/Helpers.jsx';
import { useNavigate } from "react-router-dom";




export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        email: 'g3admin@gmail.com',
        password: 'g3-admin'
    }

    const handleSubmitFormik = async (event) => {
        dispatch(
            getLogin(event.email, event.password)
        ) 
        navigate("/public")
    }

    return (

        <LayoutAuth>
            <Formik
                validationSchema={validationAuthUser}
                onSubmit={handleSubmitFormik}
                initialValues={initialValues} 
            >
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label className='text-start'>Usuario</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={errors.email && touched.email}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className='text-start'>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={errors.password && touched.password}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                        </Form.Group>

                        <Row className='mt-3'>
                            <Button type="submit">Login</Button>
                        </Row>
                        <Row className='text-center'>
                            <Link to={'/auth/register'}>Registrarse</Link>
                        </Row>

                    </Form>)}
            </Formik>

        </LayoutAuth>

    );
};