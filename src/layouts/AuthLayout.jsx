import React from 'react';
import { Container } from 'react-bootstrap';
import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import StartUser from '../pages/users/StartUser';
import DashUser from '../pages/users/DashUser';

export const AuthLayout = () => {

    return (
        <>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/start' element={<StartUser/>}/>
                <Route path='/dashUser' element={<DashUser/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </>
    );
};