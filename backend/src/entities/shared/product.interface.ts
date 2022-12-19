export interface Product {
    title: string
    mainSide: 'male' | 'female'
    price: number
    brand: string
    rating: number
    numReviews: number
    countInStock: number
    description: string
    image: string
    imageGalley: string[]
    createdAt: Date
    updatedAt: Date
}