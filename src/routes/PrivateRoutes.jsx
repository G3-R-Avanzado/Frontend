import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children, isLogged }) => {
    console.log("Private Routes");
    return (isLogged)
        ? children
        : <Navigate to={'/'} />
};