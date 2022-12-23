import { Product as IProduct } from "~/shared/product.interface";
import * as axiosClient from "~/utils/axiosClient";

const cartApiServices = {
    addToCart: (body: IProduct) => {
        const url = '/cart/add'
        return axiosClient.privateAxios.post(url, body)
    }
}

export default cartApiServices