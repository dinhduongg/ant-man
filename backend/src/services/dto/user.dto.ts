import { User as IUser } from '@/entities/shared/account.interface'
import { AuthorityRole } from '@/entities/shared/enums'

export class UserDTO implements IUser {
    city?: string
    street?: string
    postalCode?: string
    country?: string

    username: string
    password: string
    email?: string
    phone?: string
    fullname?: string
    authorities: AuthorityRole[]
    authority: AuthorityRole

    createdAt: Date
    updatedAt: Date
    createdBy: string
    updatedBy: string
}
