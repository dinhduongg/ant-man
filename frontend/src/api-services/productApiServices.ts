import queryString from 'query-string'
import { Query as IQuery } from '~/shared/interface'
import { Product as IProduct } from '~/shared/product.interface'
import * as axiosClient from "~/utils/axiosClient"

const productApiServices = {
    getProducts: (query?: IQuery) => {
        const url = '/product/get'
        return axiosClient.publicAxios.get<IProduct[]>(url, { params: { ...query } })
    },

    getOneProduct: (id: string) => {
        const url = `/product/get/${id}`
        return axiosClient.publicAxios.get<IProduct, any>(url, {
            paramsSerializer: {
                serialize: (params) => queryString.stringify(params)
            },
        })
    }
}

export default productApiServices