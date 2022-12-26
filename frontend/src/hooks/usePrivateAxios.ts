import { useEffect } from "react"
import { useCookies } from 'react-cookie'
import { privateAxios } from "~/utils/axiosClient"
import useAuth from "./useAuth"

const usePrivateAxios = () => {
    const [cookie] = useCookies()
    const { auth } = useAuth()

    useEffect(() => {

        const requestIntercept = privateAxios.interceptors.request.use(
            config => {
                config.headers = {
                    ...config.headers,
                    Authorization: `Bearer ${auth?.accessToken}`
                }
                return config
            },
            (error) => {
                Promise.reject(error)
            }
        )

        const responseIntercept = privateAxios.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config
                if (error?.response?.status === 403 && !prevRequest.sent) {
                    prevRequest.sent = true
                    prevRequest.headers['Authorization'] = `Bearer ${cookie.jwt.accessToken}`
                    return privateAxios(prevRequest)
                }
                return Promise.reject(error)
            }
        )

        return () => {
            privateAxios.interceptors.request.eject(requestIntercept)
            privateAxios.interceptors.response.eject(responseIntercept)
        }

    }, [auth, cookie])

    return privateAxios
}

export default usePrivateAxios  