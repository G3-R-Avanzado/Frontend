import { createContext, useReducer } from "react"
import { AuthReducer } from "../reducers/AuthReducer";
import { types } from "../types/Types";

export const AuthContext = createContext();

const initialValues = {
    user: {},
    isLogged: false,
    token: '',
    message: ''
}
export const AuthProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, initialValues)
    const login = ({usuario, contraseña}) => {
        const user = {
            user: {
                name: 'Agustin',// esto se debe cambiar hardcodeado
                apellido: 'Sanchez'// esto se debe cambiar hardcodeado
            },
            isLogged: true,
            token: 'asdasdasdasdasd',
            message: 'Usuario logeado con exito'
        }
        dispatch({
            type: "LOGIN",
            payload: user
        })
    }
    const logout = () => {
        const user = {
            user: {
                name: null,
                apellido: null
            },
        }
        dispatch({
            type: "LOGOUT",
            payload:{
                user:null,
                isLogged: false,
                token: null,
                message:"Cerraste sesion"        
            } 
        })
    }
    return (
        <AuthContext.Provider value={{state, login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}