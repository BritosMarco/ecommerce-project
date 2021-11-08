import { EntityRepository, Repository } from 'typeorm';
import { Sales } from './entities/sales.entity';
import { CreateSalesDto } from './dto/create-sales.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Sales)
export class SalesRepository extends Repository<Sales> {
  FindSales: any;

  async createSales(createSalesDto: CreateSalesDto): Promise<Sales> {
    const {
      productQuantity,
      totalValueSale,
      nameCard,
      numberCard,
      validationCode,
      validationDate,
      totalValueItem,
      totalQuantity,
      orderNumber,
      userId,
      productId,
    } = createSalesDto;
    const sales = this.create();
    sales.productQuantity = productQuantity;
    sales.totalValueItem = totalValueItem;
    sales.totalValueSale = totalValueSale;
    sales.totalQuantity = totalQuantity;
    sales.orderNumber = orderNumber;
    sales.nameCard = nameCard;
    sales.numberCard = numberCard;
    sales.validationCode = validationCode;
    sales.validationDate = validationDate;
    sales.user = userId;
    sales.products = productId;

    try {
      await sales.save();
      return sales;
    } catch (error) {
      console.log({ error });
      if (error.code.toString() === '23505') {
        throw new ConflictException('Venda Já cadastrado');
      } else {
        throw new InternalServerErrorException('Erro ao cadastrar Produto');
      }
    }
  }
}
