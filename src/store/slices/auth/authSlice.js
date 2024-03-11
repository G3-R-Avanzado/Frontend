import { createSlice } from "@reduxjs/toolkit";

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
            state.message = null
        }, 
        logout: (state) => {
            state.user = {
                username: null,
                email: null,
                rol: null,
                id: null,
                createdAt: null,
                updateAt: null
            },
            state.token = null,
            state.isLogged = false,
            state.message = null
        },
        messageError: (state, action) => {
            state.message = action.payload.message
        }
    } 
});

export const {login, logout, messageError} = authSlice.actions;