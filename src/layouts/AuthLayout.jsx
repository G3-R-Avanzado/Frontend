import React from 'react';
import { Container } from 'react-bootstrap';
import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';
import { Routes, Route } from 'react-router-dom';

export const AuthLayout = () => {
    return (
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
    );
};