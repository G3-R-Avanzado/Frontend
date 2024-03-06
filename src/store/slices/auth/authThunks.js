import { login } from "./authSlice";
import { axiosAuth } from "../../../config/axiosApi";

export const getLogin = (email, password) => {
    return async (dispatch) => {
        try {

            const { data } = await axiosAuth.post('/login', {
                email: email,
                password: password
            })

            dispatch(login({
                user: data,
                token: 'sa23fgty54tgfewr43'
            }))

        } catch (error) {
            console.log(error);
        }

    }
}