import useAuth from '~/hooks/useAuth'
import userApiServices from '~/api-services/userApiServices';
import { useCookies } from 'react-cookie'

const useRefresh = () => {
    const [cookies, setCookie] = useCookies()
    const { setAuth } = useAuth()

    const refresh = async () => {
        const response = await userApiServices.refreshToken()

        setAuth((prev: any) => ({
            ...prev,
            accessToken: cookies.accessToken,
            username: cookies.username,
            fullname: cookies.fullname,
            roles: cookies.authorities
        }))

        return cookies
    }

    return refresh
}

export default useRefresh