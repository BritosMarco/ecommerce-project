import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ReturnProductDto } from './dto/return-products.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProducts(
    @Body(ValidationPipe) createProductDto: CreateProductDto,
  ): Promise<ReturnProductDto> {
    const product = await this.productService.createProducts(createProductDto);
    return {
      product,
      message: 'Produto cadastrado com sucesso',
    };
  }

  @Get()
  async findProductsAll() {
    const found = await this.productService.findProductsAll();
    return {
      found,
      message: 'Produtos encontrados',
    };
  }

  @Get(':id')
  async findProductId(@Param('id') id): Promise<ReturnProductDto> {
    const product = await this.productService.findProductId(id);
    return {
      product,
      message: 'Produto Localizado',
    };
  }

  @Patch(':id')
  async updateProduct(
    @Body(ValidationPipe) updateProductDto: CreateProductDto,
    @Param('id') id: string,
  ): Promise<ReturnProductDto> {
    const product = await this.productService.updateProduct(
      updateProductDto,
      id,
    );
    return {
      product,
      message: 'Produto Alterado com sucesso',
    };
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    await this.productService.deleteProduct(id);
    return {
      message: 'Produto removido com sucesso',
    };
  }
}
