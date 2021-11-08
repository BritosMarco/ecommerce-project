import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async createProducts(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.createProducts(createProductDto);
  }

  async findProductsAll(): Promise<Product[]> {
    const products = await this.productRepository.find({
      select: [
        'productName',
        'id',
        'productBrand',
        'productModel',
        'description',
        'productImage',
        'productQuantity',
        'productBuyPrice',
        'productSalesPrice',
      ],
    });
    if (!products) throw new NotFoundException('Produtos não encontrados');

    return products;
  }

  async findProductId(productId: string): Promise<Product> {
    const product = await this.productRepository.findOne(productId, {
      select: [
        'productName',
        'id',
        'productBrand',
        'productModel',
        'description',
        'productImage',
        'productQuantity',
        'productBuyPrice',
        'productSalesPrice',
      ],
    });
    if (!product) throw new NotFoundException('Profissional não encontrado');
    return product;
  }

  async updateProduct(
    updateProductDto: CreateProductDto,
    id: string,
  ): Promise<Product> {
    const product = await this.findProductId(id);

    const {
      productName,
      productBrand,
      productModel,
      description,
      productImage,
      productSalesPrice,
      ProductBuyPrice,
      productQuantity,
    } = updateProductDto;

    product.productName = productName ? productName : product.productName;
    product.productBrand = productBrand ? productBrand : product.productBrand;
    product.productModel = productModel ? productModel : product.productModel;
    product.description = description ? description : product.description;
    product.productImage = productImage ? productImage : product.productImage;
    product.productBuyPrice = ProductBuyPrice
      ? ProductBuyPrice
      : product.productBuyPrice;
    product.productSalesPrice = productSalesPrice
      ? productSalesPrice
      : product.productSalesPrice;
    product.productQuantity = productQuantity
      ? productQuantity
      : product.productQuantity;

    try {
      await product.save();
      return product;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar os dados no banco de dados',
      );
    }
  }

  async deleteProduct(productId: string) {
    const result = await this.productRepository.delete({ id: productId });

    if (result.affected === 0) {
      throw new NotFoundException(
        'Não foi encontrado um produto com o ID informado',
      );
    }
  }
}
