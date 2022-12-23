import queryString from 'query-string'
import { Review as IReview } from "~/shared/review.interface"
import * as axiosClient from "~/utils/axiosClient"

interface reviewResponse {
    reviews: IReview[]
    totalPage: number | null
}

const reviewApiServices = {
    getReviews: (id: string, page?: number) => {
        const url = `/review/get/product/${id}`
        return axiosClient.publicAxios.get<reviewResponse>(url, {
            paramsSerializer: {
                serialize: (params) => queryString.stringify(params)
            },
        })
    }
}

export default reviewApiServices