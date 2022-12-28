export interface productWhist {
    id: string
    price: number
    name: string
    image: string
    brand: string
    mainSide: string
}

export interface WhistList {
    username: string,
    products: productWhist[]
    createdAt: Date
    updatedAt: Date
}