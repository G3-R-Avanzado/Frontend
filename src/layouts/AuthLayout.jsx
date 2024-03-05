import React from 'react';
import { Container } from 'react-bootstrap';
import { Login } from '../pages/auth/Login';
import { Routes, Route } from 'react-router-dom';

export const AuthLayout = () => {

    console.log("Auth Layout");

    return (
            <Routes>
                <Route path='/login' element={<Login/>}/>
            </Routes>
    );
};