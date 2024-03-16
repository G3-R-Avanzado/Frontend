import { createSlice } from "@reduxjs/toolkit";

/* const initialState = {
    user: {
        username: "Agustin",
        email: "asdasdasd@gmail.com",
        rol: "Admin",
        id: 51561651,
        createdAt: "dasdasd",
        updateAt: "sadadasd"
    },
    isLogged: true,
    token: "sdfsdfsdf",
    message: null
}   */

const initialState = {
    user: {
        username: null,
        email: null,
        rol: null,
        id: null,
        createdAt: null,
        updateAt: null
    },
    isLogged: false,
    token: null,
    message: null
}  

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user,
            state.token = action.payload.token,
            state.isLogged = true,
            state.rol=action.payload.user.rol
            state.message={
                type:"success",
                text:"Iniciaste sesión"
            } 
        }, 
        logout: (state) => {
            state.user = {
                username: null,
                email: null,
                rol: null,
                id: null,
                rol:null,
                createdAt: null,
                updateAt: null
            },
            state.token = null,
            state.isLogged = false,
            state.message={
                type:"success",
                text:"Cerraste sesión"
            } 
        },
        messageError: (state, action) => {
            state.message ={
                type:"error",
                text:action.payload.message
            } 
        }
    } 
});

export const {login, logout, messageError} = authSlice.actions;