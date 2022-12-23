import { SetMetadata } from '@nestjs/common'
import { AuthorityRole } from '@/entities/shared/enums';

export const Roles = (...roles: AuthorityRole[]): any => SetMetadata('roles', roles)
