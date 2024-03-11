import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashUser from '../pages/users/DashUser.jsx';
import StartUser from "../pages/users/StartUser.jsx"
export const UserLayout = () => {
    return (
        <Routes>
            <Route path='/' element={<StartUser/>} />
            <Route path='/Dashboard' element={<DashUser/>} />
        </Routes>
    );
};