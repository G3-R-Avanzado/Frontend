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
import UserLayout from "../layouts/UserLayout.jsx"
import Home from '../pages/Home/Home.jsx';

export const AppRoutes = () => {
    const {isLogged,rol} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(checkToken())
    },[])
    
    return (
        <>
            <Menu isLogged={isLogged} />
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route exact path='/*' element={
                    <PublicRoutes isLogged={isLogged} rol={rol}>
                        <AuthLayout />
                    </PublicRoutes>
                } 
                />
                <Route exact path='/Admin/*' element={
                    <PrivateRoutesAdmin isLogged={isLogged} rol={rol}>
                        <AdminLayouts />
                    </PrivateRoutesAdmin>
                } />
                <Route path='/Usuario/*' element={
                    <PrivateRoutesUser isLogged={isLogged} rol={rol}>
                    <UserLayout/>
                    </PrivateRoutesUser>
                }/>
            </Routes>
            <Footer/>
        </>
    );
};