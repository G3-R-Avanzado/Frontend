import { login, logout, messageError } from "./authSlice";
import { axiosAuth } from "../../../config/axiosApi";

export const getLogin = (email, password) => {
    console.log(email);
    console.log(password);

    return async (dispatch) => {
        try {
            const response = await axiosAuth.post('/login', {
                email: email,
                password: password
            })
            const token = 'sa23fgty54tgfewr43'
            localStorage.setItem('user', JSON.stringify(response.data))
            localStorage.setItem('token', token)
            console.log(response)
            const headers = response.headers;
            console.log(headers)
            const cookie = headers.get('Set-Cookie');
            console.log(cookie);
           /*  dispatch(login({
                user: response.data,
                token: token
            })) */
        } catch (error) {
            if(error.message){
                dispatch(messageError({message: error.response.data[0]}))
            }
        }
    }
}

export const checkToken = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')

        if(!token){
            //valido si el token esta vacio
            dispatch(logout())
        }

        //validacion con backend del token
    }
}

export const register = (newUser) => {
    return async (dispatch) => { 
        try {
            const {data} = await axiosAuth.post('/register', newUser);
            const token = 'sa23fgty54tgfewr43'
            dispatch(login({
                user: data,
                token: token
            }))
            localStorage.setItem('user', JSON.stringify(data))
            localStorage.setItem('token', token)
        } catch (error) {
            dispatch(messageError({message: error.response.data[0]}))
        }
    }
}