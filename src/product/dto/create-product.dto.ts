import {
  IsNotEmpty,
  IsNumber,
  MaxLength,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Informe o nome' })
  @MinLength(2, { message: 'Nome deve ter no minimo 2 caracteres' })
  @MaxLength(60, {
    message: 'O nome deve ter menos de 120 carcateres',
  })
  productName: string;

  @IsNotEmpty({ message: 'Informe o marca' })
  @MinLength(2, { message: 'Nome deve ter no minimo 2 caracteres' })
  @MaxLength(60, {
    message: 'A marca deve ter menos de 40 carcateres',
  })
  productBrand: string;

  @IsNotEmpty({ message: 'Informe o modelo' })
  @MinLength(2, { message: 'Nome deve ter no minimo 2 caracteres' })
  @MaxLength(60, {
    message: 'O modelo deve ter menos de 40 carcateres',
  })
  productModel: string;

  @IsNotEmpty({ message: 'Informe a descrição' })
  @MinLength(2, { message: 'Nome deve ter no minimo 2 caracteres' })
  @MaxLength(200, {
    message: 'A descrição deve ter menos de 20 carcateres',
  })
  description: string;

  @IsNotEmpty({ message: 'Informe a Url da imagem' })
  @MinLength(10, { message: 'Nome deve ter no minimo 10 caracteres' })
  @MaxLength(200, {
    message: 'A descrição deve ter menos de 200 carcateres',
  })
  productImage: string;

  @IsNumber()
  @IsOptional()
  productQuantity: number;

  @IsNumber()
  @IsOptional()
  ProductBuyPrice: number;

  @IsNumber()
  @IsOptional()
  productSalesPrice: number;
}
