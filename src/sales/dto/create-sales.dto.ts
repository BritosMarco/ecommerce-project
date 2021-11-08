import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MaxLength,
  Length,
  IsArray,
} from 'class-validator';
import { Product } from 'src/product/entities/product.entity';
import { Users } from 'src/users/entities/user.entity';

export class CreateSalesDto {
  @IsNumber()
  productQuantity: number;

  @IsNumber()
  totalValueSale: number;

  @IsNumber()
  totalValueItem: number;

  @IsNumber()
  totalQuantity: number;

  @IsNumber()
  orderNumber: number;

  @IsOptional({ message: 'Informe o numero do cartão' })
  @MaxLength(20, {
    message: 'O numero do cartão deve ter menos de 20 carcateres',
  })
  numberCard: string;

  @IsOptional({ message: 'Informe a data de validade do cartão  MM/YY' })
  @Length(5, 5, {
    message: 'A data de validade mes/ano carcateres',
  })
  validationDate: string;

  @IsOptional({ message: 'Informe o nome igual ao do cartão' })
  @MaxLength(60, {
    message: 'O nome deve ter menos de 60 carcateres',
  })
  nameCard: string;

  @IsOptional()
  @IsNumber()
  validationCode: number;

  userId: Users;

  @IsNotEmpty({ message: 'informe o código do produto' })
  productId: Product[];
}
