import { Users } from '../entities/user.entity';

export class ReturnUsersDto {
  users: Users;
  message: string;
}

export class arrayReturnUsersDto {
  usersArray: Users[];
  message: string;
}
