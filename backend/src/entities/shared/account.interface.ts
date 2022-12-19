import { AuthorityRole } from "../shared/enums"

export interface Address {
    city?: string,
    street?: string
    postalCode?: string
    country?: string
}

export interface Authentication {
    username: string
    password: string
    email?: string
    phone?: string
    fullname?: string
    authorities: AuthorityRole[]
    authority: AuthorityRole
}

export interface User extends Address, Authentication {
    createdAt: Date
    updatedAt: Date
    // createdBy: string
    // updatedBy: string
}