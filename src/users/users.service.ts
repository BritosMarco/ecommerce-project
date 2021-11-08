import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
  async createUser(createUsertDto: CreateUserDto): Promise<Users> {
    return this.userRepository.createUsers(createUsertDto);
  }

  async findOneUser(id: number): Promise<Users> {
    const users = await this.userRepository.findOne(id, {
      relations: ['sales'],
      select: ['id', 'name', 'sales'],
    });
    if (!users) throw new NotFoundException('Pedido não encontrado');
    return users;
  }

  async findAllUser(): Promise<Users[]> {
    const users = await this.userRepository.find({
      relations: ['sales'],
      select: ['id', 'name', 'sales'],
    });
    if (!users) throw new NotFoundException('Bão há pedidos cadastrados');
    return users;
  }

  /* findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  } */
}
