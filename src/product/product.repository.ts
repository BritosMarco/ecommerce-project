import { EntityRepository, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  FindProduct: any;

  async createProducts(createProductDto: CreateProductDto): Promise<Product> {
    const {
      productName,
      productBrand,
      productModel,
      description,
      productImage,
      productQuantity,
      productSalesPrice,
      ProductBuyPrice,
    } = createProductDto;
    const products = this.create();
    products.productName = productName;
    products.productBrand = productBrand;
    products.productModel = productModel;
    products.description = description;
    products.productImage = productImage;
    products.productQuantity = productQuantity;
    products.productSalesPrice = productSalesPrice;
    products.productBuyPrice = ProductBuyPrice;

    try {
      await products.save();
      return products;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Produto Já cadastrado');
      } else {
        throw new InternalServerErrorException('Erro ao cadastrar Produto');
      }
    }
  }
}
