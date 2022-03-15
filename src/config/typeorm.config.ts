import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'caothanhlam',
  database: 'taskmanagement',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity.js'],
  logging: true,
};
