import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Param,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ReturnUsersDto } from './dto/return-user-dto';
import { arrayReturnUsersDto } from './dto/return-user-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUsers(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<ReturnUsersDto> {
    const users = await this.usersService.createUser(createUserDto);
    return {
      users,
      message: 'Usuario cadastrado com sucesso',
    };
  }

  @Get(':id')
  async findOneUser(@Param('id') id): Promise<ReturnUsersDto> {
    const users = await this.usersService.findOneUser(id);
    return {
      users,
      message: 'Usuario Localizado',
    };
  }

  @Get()
  async findAllUser(): Promise<arrayReturnUsersDto> {
    const usersArray = await this.usersService.findAllUser();
    return {
      usersArray,
      message: 'Usuario Localizado',
    };
  }
  /*
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  } */
}
