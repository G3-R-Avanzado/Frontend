import React from 'react';
import { Navigate } from 'react-router-dom';

export const GeneralRoutes = ({ children, isLogged }) => {
    if(isLogged){
        return children
    }else{
        return <Navigate to={'/'} />
    }
};