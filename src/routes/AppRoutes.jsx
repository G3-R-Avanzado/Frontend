import React, { useContext, useEffect } from 'react';
//import { AuthContext } from '../providers/AuthProvider';
import { Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutesAdmin } from './PrivateRoutesAdmin.jsx';
import { AuthLayout } from '../layouts/AuthLayout';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '../components/common/Menu';
import { checkToken } from '../store/slices/auth/authThunks';
import { Footer } from '../components/common/Footer.jsx'
import PrivateRoutesUser from './PrivateRoutesUser.jsx';
import PublicLayouts from '../layouts/PublicLayouts.jsx';
import AdminLayouts from "../layouts/AdminLayout.jsx"

export const AppRoutes = () => {
    const {isLogged} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(checkToken())
    },[])
    
    return (
        <>
            <Menu isLogged={isLogged}/>
            <Routes>
                <Route exact path='/*' element={
                    <PublicRoutes isLogged={isLogged}>
                        <PublicLayouts/>
                        <AuthLayout />
                    </PublicRoutes>
                } 
                />
                <Route exact path='/Admin/*' element={
                    <PrivateRoutesAdmin isLogged={isLogged}>
                        <AdminLayouts />
                    </PrivateRoutesAdmin>
                } />
                <Route path='/Usuario/*' element={
                    <PrivateRoutesUser isLogged={isLogged}>
                    
                    </PrivateRoutesUser>
                }/>
            </Routes>
            <Footer/>
        </>
    );
};