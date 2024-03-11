import React from 'react';
import { Routes ,Route} from 'react-router';
import StartAdmin from '../pages/admins/StartAdmin';
import DashboardAdmin from '../pages/admins/DashboardAdmin';

const AdminLayout = () => {
    return (
        <Routes>
            <Route path='/' element={<StartAdmin/>}/>
            <Route path='/dashboard' element={<DashboardAdmin/>}/>
        </Routes>
    );
};

export default AdminLayout;