import { Entity, Property } from '@mikro-orm/core'
import { User as IUser } from './shared/account.interface'
import { AuthorityRole } from './shared/enums'
import { Base } from './support/base.entity'

@Entity({ collection: 'user' })
export class User extends Base implements IUser {
    // authentication
    @Property() username: string
    @Property() password: string
    @Property() email: string
    @Property() phone: number
    @Property() fullname?: string
    @Property() authorities: AuthorityRole[]
    @Property() authority: AuthorityRole

    // address
    @Property() city: string
    @Property() street: string
    @Property() postalCode: string
    @Property() country: string
}