import React, { useEffect } from 'react';
import { Row, Col, Container, Form, Button, ButtonGroup } from 'react-bootstrap';
import { Formik, FieldArray, Form as FormFormik, ErrorMessage } from 'formik';
import { validationAltaProduct, Attribut } from '../../helpers/Helpers';

export const Alta = () => {

    const handleSubmitFormik = (event) => {
        console.log(event);
    }


    return (
        <Container>
            <Formik
                validationSchema={validationAltaProduct}
                onSubmit={handleSubmitFormik}
                initialValues={{
                    Categoria: '',
                    Precio: 0,
                    Atributos: [{ Atributo: "", Valor: "" }]
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <FormFormik noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Categoria"
                                    value={values.Categoria}
                                    onChange={handleChange}
                                    isValid={touched.Categoria && !errors.Categoria}
                                    isInvalid={errors.Categoria}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.Categoria}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="Precio"
                                    value={values.Precio}
                                    onChange={handleChange}
                                    isValid={!errors.Precio}
                                    isInvalid={errors.Precio}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.Precio}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <FieldArray name='Atributos'>
                            {({ insert, remove, push }) => (
                                values.Atributos.length > 0 && (
                                    values.Atributos.map((atributo, index) => (
                                        <Row key={index} className='border border-light border-3 py-3 my-1'>
                                            <Form.Group as={Col} sm={5}>
                                                <Form.Control
                                                    placeholder='Atributo'
                                                    type="text"
                                                    name={`Atributos.${index}.Atributo`}
                                                    onChange={handleChange}
                                                    isValid={touched.Atributos && !errors.Atributos}
                                                    isInvalid={errors.Atributos && errors.Atributos[index]}
                                                />
                                                <Form.Control.Feedback type='invalid'>{errors.Atributos && errors.Atributos[index] && errors.Atributos[index].Atributo}</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} sm={5}>
                                                <Form.Control
                                                    placeholder='Valor'
                                                    type="text"
                                                    name={`Atributos.${index}.Valor`}
                                                    onChange={handleChange}
                                                    isValid={touched.Atributos && !errors.Atributos}
                                                    isInvalid={errors.Atributos && errors.Atributos[index]}
                                                />
                                                <Form.Control.Feedback type='invalid'>{errors.Atributos && errors.Atributos[index] && errors.Atributos[index].Valor}</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} sm={2} className='d-flex justify-content-center'>
                                                <ButtonGroup>
                                                    <Button onClick={() => { push({ Atributo: "", Valor: "" }) }}>+</Button>
                                                    <Button variant='danger' onClick={() => remove(index)}>-</Button>
                                                </ButtonGroup>
                                            </Form.Group>
                                        </Row>
                                    ))
                                )
                            )}
                        </FieldArray>

                        <Button type="submit" >Submit form</Button>
                    </FormFormik>
                )}
            </Formik>
        </Container>
    );
};

