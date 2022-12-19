import { User } from '@/entities/user.entity'
import { UserDTO } from '@/services/dto/user.dto'
import userMapper, { UserMapper } from '@/services/mappers/user.mapper'
import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb'
import { InjectRepository } from '@mikro-orm/nestjs'
import { cloneDeep } from 'lodash'
import { hash } from 'bcrypt'
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'
import { generalUserTemplate } from './support/dictionary'
import { HttpException } from '@nestjs/common/exceptions'
import { HttpStatus } from '@nestjs/common/enums'
import { wrap } from '@mikro-orm/core'

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    protected readonly repository: MongoEntityRepository<User>,
    protected readonly em: EntityManager,
    // protected eventEmitter: EventEmitter2,
    protected readonly mapper: UserMapper,
    @Inject(CACHE_MANAGER)
    protected readonly _cache: Cache,
  ) { }

  async create(dto: UserDTO): Promise<UserDTO | any> {
    try {
      const checkUser = await this.repository.findOne({ username: dto.username })
      if (checkUser) throw new HttpException('Tên đăng nhập đã tồn tại', HttpStatus.UNPROCESSABLE_ENTITY)
      const user = this.repository.create(cloneDeep(generalUserTemplate))
      user.username = dto.username
      user.password = await hash(dto.password, 10)

      await this.repository.persistAndFlush(user)
      return this.mapper.toDTO(user)
    } catch (error) {
      console.log(error)
    }
  }

  async findAll(): Promise<UserDTO[]> {
    const users = await this.repository.find({})
    return users.map((user) => this.mapper.toDTO(user))
  }

  async findOne(username: string): Promise<UserDTO> {
    const user = await this.repository.findOne({ username: username })
    if (!user) throw new HttpException(`Không tìm thấy người dùng ${username}`, HttpStatus.BAD_REQUEST)
    return this.mapper.toDTO(user)
  }

  async update(username: string, dto: UserDTO): Promise<UserDTO> {
    const user = await this.repository.findOne({ username: username })
    if (!user) throw new HttpException(`Không tìm thấy người dùng ${username}`, HttpStatus.BAD_REQUEST)
    wrap(user).assign(dto)
    await this.repository.flush()
    return userMapper.e2d(user)
  }

  async resetPassword(username: string, action: string, dto: Pick<UserDTO, 'password'>): Promise<UserDTO> {
    const user = await this.repository.findOne({ username })
    if (!user) throw new HttpException(`Không tìm thấy người dùng ${username}`, HttpStatus.BAD_REQUEST)

    if (action === 'change') {
      user.password = await hash(dto.password, 10)
    } else { // reset
      user.password = await hash(user.username, 10)
    }

    await this.repository.flush()
    return this.mapper.toDTO(user)
  }

  async remove(username: string) {
    return await this.repository.nativeDelete({ username })
  }
}
