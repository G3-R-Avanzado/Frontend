import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children, isLogged }) => {
    if(isLogged){
        return children
    }else{
        return <Navigate to={'/public'} />
    }
};

export default PrivateRoutes;