import React from 'react';
import { Route, Routes } from 'react-router';
import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';
import Home from '../pages/Home/Home';
import Contacto from '../pages/contacto/Contacto';
import Ayuda from '../pages/ayuda/Ayuda';

const PublicLayouts = () => {
    return (
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/contacto'element={<Contacto/>}/>
            <Route path='/ayuda'element={<Ayuda/>}/>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/auth/register' element={<Register/>}/>
        </Routes>
    );
};

export default PublicLayouts;