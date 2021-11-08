import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSalesDto } from './dto/create-sales.dto';
import { ReturnSalesDto } from './dto/return-sales-dto';
@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Post()
  async createSales(
    @Body(ValidationPipe) createSalesDto: CreateSalesDto,
  ): Promise<ReturnSalesDto> {
    const sales = await this.salesService.createSales(createSalesDto);
    return {
      sales,
      message: 'Pedido cadastrado com sucesso',
    };
  }
}
