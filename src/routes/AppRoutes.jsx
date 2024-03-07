import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Routes, Route, BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthLayout } from '../layouts/AuthLayout';
import { GeneralLayout } from '../layouts/GeneralLayout';
import Menu from '../components/common/Menu';
import Footer from '../components/common/Footer';
import Home from '../pages/Home';
import { Login } from '../pages/auth/Login';

export const AppRoutes = () => {
    const { state } = useContext(AuthContext)
    const isLogged = state.isLogged;
    console.log(isLogged);

    return (
        <>
            <Menu isLogged={isLogged}/>
            <Routes>
                <Route exact path='/*' element={
                    <PublicRoutes isLogged={isLogged}>
                        <AuthLayout />
                    </PublicRoutes>
                } />
                <Route exact path='/Admin/*' element={
                    <PrivateRoutes isLogged={isLogged}>
                        <GeneralLayout />
                    </PrivateRoutes>
                } />
            </Routes>
            <Footer></Footer>
        </>
    );
};