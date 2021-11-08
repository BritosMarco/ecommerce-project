import {
  IsNotEmpty,
  IsNumber,
  MaxLength,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  name: string;
}
