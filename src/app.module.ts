import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmConfig } from './configs/typeorm.configs';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductModule, TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
