import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoutesAdmin = ({ children, isLogged,rol }) => {
    console.log(rol)
    if(isLogged==true && rol=="admin"){
        return children
    }else{
        return <Navigate to={'/login'} />
    }
};