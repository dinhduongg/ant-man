import { WhistList as IWhistList, productWhist } from '@/entities/shared/whist-list.interface'
import { Base } from '@/entities/support/base.entity'
import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class WhistList extends Base implements IWhistList {

    @PrimaryKey({ fieldName: '_id' }) username: string
    @Property() products: productWhist[]

}