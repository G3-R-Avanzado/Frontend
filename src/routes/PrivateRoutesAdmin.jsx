import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoutesAdmin = ({ children, isLogged }) => {
    return (isLogged)
        ? children
        : <Navigate to={'/login'} />
};