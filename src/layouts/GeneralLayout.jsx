import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Alta } from '../pages/products/Alta.jsx'
import Home from '../pages/Home.jsx';

export const GeneralLayout = () => {
    return (
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
    );
};