import React, { useContext, useEffect } from 'react';
//import { AuthContext } from '../providers/AuthProvider';
import { Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthLayout } from '../layouts/AuthLayout';
import { GeneralLayout } from '../layouts/GeneralLayout';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '../components/common/Menu';
import { checkToken } from '../store/slices/auth/authThunks';

export const AppRoutes = () => {
    const {isLogged} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(checkToken())
    },[])
    
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