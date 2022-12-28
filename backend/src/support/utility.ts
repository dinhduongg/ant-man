import { Pageable, Query } from "@/entities/shared/interface"
import { FindOptions, QueryOrder, QueryOrderMap } from "@mikro-orm/core";
import { Builder } from "builder-pattern";

export const makeFindOptions = <T>(pageable: Pageable): FindOptions<T> => {
    let orderBy = Builder<QueryOrderMap<T>>().build()
    if (pageable && Boolean(pageable.sort)) {
        orderBy = Object.fromEntries([Object.values(pageable.sort)])
        if (orderBy) {
            for (const val in orderBy) {
                orderBy[val] = orderBy[val] === 'a' ? QueryOrder.ASC : QueryOrder.DESC
            }
        }
    }
    orderBy['createdAt'] = QueryOrder.ASC
    return Builder<FindOptions<T>>().limit(+pageable?.maxPage ?? 20).offset((+pageable?.page ?? 0) * (+pageable?.maxPage ?? 20)).orderBy(orderBy).build()
}