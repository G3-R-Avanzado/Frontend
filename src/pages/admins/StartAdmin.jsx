import React from 'react';
import { useSelector } from 'react-redux';

const StartAdmin = () => {
    const{user}=useSelector((store)=>{store.auth})

    return (
        <div>
            <h6>Bienvenido {user.username}</h6>
        </div>
    );
};

export default StartAdmin;