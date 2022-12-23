import axios from "axios"
import { config } from "process";
import queryString from 'query-string'
import userApiServices from "~/api-services/userApiServices"

// public axiosClient
export const publicAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    params: (params: Record<string, any>) => {
        return queryString.stringify(params);
    },
})

// private axiosClient
export const privateAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: {
        encode: (params) => queryString.stringify(params)
    }
});

privateAxios.interceptors.request.use(
    async (config) => {
        // get accessToken from localStroage
        const auth = JSON.parse(localStorage.getItem('auth') as string)

        // handle token here
        if (auth && auth?.accessToken) {
            config.headers = {
                ...config.headers,
                token: `Bearer ${auth.accessToken}`
            }
        }

        console.log(config)

        return config;
    },
    error => Promise.reject(error)
);

privateAxios.interceptors.response.use(
    async (response) => {
        return response
    },
    async (error) => {
        // handel error
        const prevRequest = error?.config

        if (error?.response?.status === 403 && !prevRequest?.sent) {
            prevRequest.sent = true
            const response = await userApiServices.refreshToken()

            // set local
            // const accessToken = response.data.accessToken as string
            // const roles = response.data.authorities
            // const username = response.data.username
            // const fullname = response.data.fullname ?? ''
            // localStorage.setItem('auth', JSON.stringify({ accessToken, roles, username, fullname }))

            // set header
            // prevRequest.headers['token'] = `Bearer ${accessToken}`
            // console.log("prev request: ", prevRequest)
            return privateAxios(prevRequest)
        }

        return Promise.reject(error)
    }
)
