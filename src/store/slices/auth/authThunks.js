import { login, logout, messageError } from "./authSlice";
import { axiosAuth } from "../../../config/axiosApi";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export const getLogin = (email, password) => {
    return async (dispatch) => {
        try {
            
            /* const { data } = await axiosAuth.post('/login', {
                email: email,
                password: password
            }) */

            const data = {
                username: "Agustin",
                email: "asdasdasd@gmail.com",
                rol: "Admin",
                id: 51561651,
                createdAt: "dasdasd",
                updateAt: "sadadasd"
            }


            const token = 'sa23fgty54tgfewr43'
            localStorage.setItem('user', JSON.stringify(data))
            localStorage.setItem('token', token)
            const cookieToken = Cookies.get('token	')
            const allCookies = Cookies.get();
            
            dispatch(login({
                user: data,
                token: token
            }))

        } catch (error) {
            dispatch(messageError({message: error.response.data[0]}))
        }
    }
}

export const checkToken = () => {
    return async (dispatch) => {
        // const token = localStorage.getItem('token')

        
        /* if(!token){
            //valido si el token esta vacio
            //dispatch(login())
        }else{
            //console.log("aqio");
        } */
        //validacion con backend del token
    }
}

export const register = (newUser) => {
    return async (dispatch) => { 
        try {
            const {data} = await axiosAuth.post('/register', newUser);
            const token = 'sa23fgty54tgfewr43'
            dispatch(login({
                user: data.username,
                token: token,
                rol:data.rol
            }))
            localStorage.setItem('user', JSON.stringify(data))
            localStorage.setItem('token', token)
            console.log(data)
        } catch (error) {
            dispatch(messageError({message: error.response.data[0]}))
        }
    }
}