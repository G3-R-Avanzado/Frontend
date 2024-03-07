import { types } from "../types/Types";

export const AuthReducer = (state={}, action) => {
    switch (action.type) {
        case types.auth.login:
            return{
                ...state,
                user: action.payload.user, 
                isLogged: true,
                token: action.payload.token,
                message: action.payload.message
            }
            case types.auth.logout:
                return{
                    ...state,
                    user: null, 
                    isLogged: false,
                    token: null,
                    message: "Cerraste sesion"
                }
        default:
            break;
    }
}