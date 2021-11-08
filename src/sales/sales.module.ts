import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesRepository } from './sales.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SalesRepository])],
  providers: [SalesService],
  controllers: [SalesController],
})
export class SalesModule {}
