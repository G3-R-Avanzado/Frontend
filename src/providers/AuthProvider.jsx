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
                name: 'Agustin',
                apellido: 'Sanchez'
            },
            isLogged: true,
            token: 'asdasdasdasdasd',
            message: 'Usuario logeado con exito'
        }

        dispatch({
            type: types.auth.login,
            payload: user
        })
    }

    return (
        <AuthContext.Provider value={{state, login}}>
            {children}
        </AuthContext.Provider>
    )
}