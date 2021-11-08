import { EntityRepository, Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  FindUsers: any;

  async createUsers(createUserDto: CreateUserDto): Promise<Users> {
    const { name } = createUserDto;
    const users = this.create();
    users.name = name;

    try {
      await users.save();
      return users;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Usuario Já cadastrado');
      } else {
        throw new InternalServerErrorException('Erro ao cadastrar Produto');
      }
    }
  }
}
