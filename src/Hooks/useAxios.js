import { useEffect, useState } from 'react'
import axios from 'axios';
const urlApi = import.meta.env.VITE_URL_API;

//Instancia personalizada de axios
export const reqAxiosHook = axios.create({
    baseURL: urlApi,
    timeout: 12000,
    headers: {
        "Content-Type": 'application/json',
        // 'token' : 'kdjsfierwhjerw0893455784598',
    }
});

export const useAxios = (url, method, params) => {
    const [dataApi, setDataApi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getFetch = async () => {
        const resp = await reqAxiosHook({
            url: url,
            method: method,
            params: { params }
        });
        const { data } = await resp.data;
        setDataApi(data);
        setIsLoading(false);
    }
    useEffect(() => {
        getFetch();
    }, [url])
    return {
        dataApi,
        isLoading
    }
}

useAxios.defaultProps = {
    params: null,
    method: 'post'
}