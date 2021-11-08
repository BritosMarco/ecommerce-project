import { Product } from '../entities/product.entity';

export class ReturnProductDto {
  product: Product;
  message: string;
}
