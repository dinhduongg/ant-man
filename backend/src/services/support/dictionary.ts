import { AuthorityRole } from "@/entities/shared/enums"
import { User } from "@/entities/user.entity"
import { Builder } from "builder-pattern"

export const generalUserTemplate = Builder(User)
    .username('')
    .password('')
    .email('')
    .phone('')
    .fullname('')
    .authorities([AuthorityRole.USER, AuthorityRole.ANONYMOUS])
    .authority(AuthorityRole.USER)
    .city('')
    .street('')
    .postalCode('')
    .country('')
    .createdAt(new Date())
    .updatedAt(new Date())
    .build()