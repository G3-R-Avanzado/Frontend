import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


import { PublicRoutes } from './PublicRoutes';
import { GeneralRoutes } from './GeneralRoutes.jsx';

import { AuthLayout } from '../layouts/AuthLayout';
import PublicLayouts from '../layouts/PublicLayouts.jsx';
import UserLayout from "../layouts/UserLayout.jsx";
import AdminLayouts from "../layouts/AdminLayout.jsx";

import { useSelector, useDispatch } from 'react-redux';
import { checkToken } from '../store/slices/auth/authThunks';


import Menu from '../components/common/Menu';
import { Footer } from '../components/common/Footer.jsx'
import Home from '../pages/Home/Home.jsx';
import { Roles } from '../type/Type.js';
import { Login } from '../pages/auth/Login';





export const AppRoutes = () => {
    const {isLogged, user} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(checkToken())
    },[])
    
    return (
        <>
            <Menu isLogged={isLogged} rol={user.rol} />
            <Routes>

                //#region Rutas Generales

                <Route path='/' element={<Home/>}/>

                //#endregion

                //#region Rutas publicas

                <Route exact path='/auth/*' element={
                    <PublicRoutes isLogged={isLogged}>
                        <AuthLayout />
                    </PublicRoutes>
                }/>

                //#endregion
                
                //#region Rutas privadas
                
                <Route path='/*' element={
                    <GeneralRoutes isLogged={isLogged}>
                        {user.rol == Roles.Admin && <AdminLayouts/>}
                        {user.rol == Roles.User && <UserLayout/>}
                    </GeneralRoutes>
                }/>

                //#endregion

            </Routes>
            <Footer/>
        </>
    );
};