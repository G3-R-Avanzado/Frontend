import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import {Alta} from '../pages/products/Alta.jsx'


export const GeneralLayout = () => {
    return (
        <Container>
            <Routes>
                <Route path='/' element={<Alta/>}/>
            </Routes>
        </Container>
    );
};