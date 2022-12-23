export interface productCart {
    id: string
    quantity: number
    price: number
    name: string
    totalMoney: number
    image: string
}

export interface Cart {
    id: string
    username: string,
    products: productCart[]
    totalPrice: number
    totalQuantity: number
    createdAt: Date
    updatedAt: Date
}