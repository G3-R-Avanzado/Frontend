import axios from "axios";

export const axiosAuth = axios.create({
    baseURL: 'https://backend-o1tb.onrender.com/api',
    timeout: 120000,
    headers: {
        "Content-Type": 'application/json',
    }
})