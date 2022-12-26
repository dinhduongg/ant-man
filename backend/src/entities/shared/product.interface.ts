export interface Product {
    id: string
    title: string
    mainSide: 'male' | 'female'
    price: number
    brand: string
    rating: number
    numReviews: number
    countInStock: number
    sale: number
    soldCount: number
    description: string
    image: string
    imageGalley: string[]
    createdAt: Date
    updatedAt: Date
}