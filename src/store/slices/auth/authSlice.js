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
    token: null
}  

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user,
            state.token = action.payload.token,
            state.isLogged = true
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
            state.isLogged = false
        }
    } 
});

export const {login, logout} = authSlice.actions;