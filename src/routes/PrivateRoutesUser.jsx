import React, { Children } from 'react';
import { Navigate } from 'react-router';

const PrivateRoutesUser = ({rol,isLogged,children}) => {
    if (isLogged && rol === "user") {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
};

export default PrivateRoutesUser;