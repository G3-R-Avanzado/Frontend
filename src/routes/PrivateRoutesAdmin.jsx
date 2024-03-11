import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoutesAdmin = ({ children, isLogged,rol }) => {
    return (isLogged && rol=="admin")
        ? children
        : <Navigate to={'/error'} />
};