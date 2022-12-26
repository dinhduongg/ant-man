import { User as IUser, registerData } from '~/shared/account.interface';
import * as axiosClient from "~/utils/axiosClient";
import queryString, { parse, stringify } from 'query-string'

const userApiServices = {
    register: (body: registerData) => {
        const url = '/auth/register'
        return axiosClient.publicAxios.post<any>(url, body)
    },
    login: (body: Omit<registerData, 'confirmPassword'>) => {
        const url = '/auth/login'
        return axiosClient.privateAxios.post<Partial<IUser> & { accessToken: string }>(url, body)
    },
    logout: () => {
        const url = '/auth/logout'
        return axiosClient.privateAxios.get(url, {
            paramsSerializer: {
                serialize: (params) => queryString.stringify(params, { arrayFormat: 'bracket' })
            }
        })
    },
    refreshToken: () => {
        const url = '/auth/refresh-access'
        return axiosClient.privateAxios.get<IUser>(url)
    },
    getUserById: (id: string) => {
        const url = `/user/get/${id}`
        return axiosClient.privateAxios.get<any>(url)
    },
}

export default userApiServices