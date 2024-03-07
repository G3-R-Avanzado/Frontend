import React from 'react';
import { Container } from 'react-bootstrap';
import { Login } from '../pages/auth/Login';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

export const AuthLayout = () => {

    return (
        <>
            <Routes>
                <Route exact path='/home' element={<Home/>} />
                <Route exact path='/login' element={<Login />} />
            </Routes>
        </>
    );
};