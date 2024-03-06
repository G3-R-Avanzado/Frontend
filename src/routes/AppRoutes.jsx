import React, { useContext } from 'react';
//import { AuthContext } from '../providers/AuthProvider';
import { Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthLayout } from '../layouts/AuthLayout';
import { GeneralLayout } from '../layouts/GeneralLayout';
import { useSelector } from 'react-redux';
import Menu from '../components/common/Menu';

export const AppRoutes = () => {
    const {isLogged} = useSelector((state)=>state.auth)
    
    return (
        <>
        <Menu></Menu>
        <Routes>
            <Route path='/auth/*' element={
                <PublicRoutes isLogged={isLogged}>
                    <AuthLayout/>
                </PublicRoutes>
            }/>
            <Route path='/*' element={
                <PrivateRoutes isLogged={isLogged}>
                    <GeneralLayout/>
                </PrivateRoutes>
            }/>
        </Routes>
        </>
    );
};