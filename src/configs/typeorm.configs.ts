import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pgecom',
  password: 'pgpassword',
  database: 'pgecom',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
