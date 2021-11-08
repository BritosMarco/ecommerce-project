import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesRepository } from './sales.repository';
import { ProductRepository } from 'src/product/product.repository';
import { CreateSalesDto } from './dto/create-sales.dto';
import { Sales } from './entities/sales.entity';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(SalesRepository)
    private salesRepository: SalesRepository,
  ) {}

  async createSales(createSalesDto: CreateSalesDto): Promise<Sales> {
    return this.salesRepository.createSales(createSalesDto);
  }
}
