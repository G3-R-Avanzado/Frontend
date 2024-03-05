import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthLayout } from '../layouts/AuthLayout';
import { GeneralLayout } from '../layouts/GeneralLayout';

export const AppRoutes = () => {
    const {state} = useContext(AuthContext)
    const isLogged = state.isLogged;
    console.log(isLogged);
    
    return (
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
    );
};