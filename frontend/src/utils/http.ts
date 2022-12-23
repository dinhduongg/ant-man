import axios, { AxiosInstance } from "axios";

class PublicHttp {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}

class PrivateHttp {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://localhost:3001',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
        })
    }
}

export const publicHttp = new PublicHttp().instance
export const privateHttp = new PrivateHttp().instance
