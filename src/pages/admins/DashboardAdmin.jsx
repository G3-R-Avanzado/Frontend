import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { login } from '../../store/slices/auth/authSlice';

const DashboardAdmin = () => {
    const { user } = useSelector((store) => store.auth);
    return (
        <div>
            <h1>Dashboard de {user.username} - {user.rol}</h1>
        </div>
    );
};

export default DashboardAdmin;