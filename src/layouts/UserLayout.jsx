import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashUser from '../pages/users/DashUser.jsx';
import StartUser from "../pages/users/StartUser.jsx"
import { useSelector } from 'react-redux';

const UserLayout = () => {
    console.log("user");
    return (
        <Routes>
            <Route path='/user/dasboard' element={<DashUser/>} />
        </Routes>
    );
};

export default UserLayout;