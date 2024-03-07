import React from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({ children, isLogged }) => {
    console.log(isLogged);
    return (!isLogged)?
    children
    :
    <Navigate to={"/Auth/login"}/>
};