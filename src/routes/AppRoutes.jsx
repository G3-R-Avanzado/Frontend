import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoutes  from './PrivateRoutes.jsx';

import PublicLayouts from '../layouts/PublicLayouts.jsx';
import UserLayout from "../layouts/UserLayout.jsx";
import AdminLayouts from "../layouts/AdminLayout.jsx";

import { useSelector, useDispatch } from 'react-redux';
import { checkToken } from '../store/slices/auth/authThunks';

import { Roles } from '../type/Type.js';

import Menu from '../components/common/Menu';
import { Footer } from '../components/common/Footer.jsx'

export const AppRoutes = () => {
    const {isLogged, user} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(checkToken())
    },[])
    
    return (
        <>
            <Menu />
            <Routes>

                <Route exact path='/public/*' element={
                    <PublicLayouts />
                }/>
                
                <Route path='/*' element={
                    <PrivateRoutes isLogged={isLogged}>
                        {user.rol == Roles.Admin && <AdminLayouts/>}
                        {user.rol == Roles.User && <UserLayout/>}
                    </PrivateRoutes>
                }/>

            </Routes>
            <Footer/>
        </>
    );
};