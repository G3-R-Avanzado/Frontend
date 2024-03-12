import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Alta } from '../pages/products/Alta.jsx'
import Home from '../pages/Home.jsx';
import StartUser from '../pages/users/StartUser.jsx';
import DashUser from '../pages/users/DashUser.jsx';

export const GeneralLayout = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
        </Routes>
    );
};