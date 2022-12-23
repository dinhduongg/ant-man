import { useNavigate } from "react-router-dom"
import { authState } from "~/context/AuthProvider"
import useAuth from "./useAuth"
import userApiServices from "~/api-services/userApiServices"

const useLogout = () => {
    const { setAuth } = useAuth()
    const navigate = useNavigate()

    const logout = async () => {
        try {
            await userApiServices.logout()
            setAuth(authState)
            localStorage.removeItem('auth')
            console.log("done")
            navigate('/')
        } catch (error) {
            console.error("có lỗi: ", error)
        }
    }

    return logout
}

export default useLogout