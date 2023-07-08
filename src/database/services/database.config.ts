import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

@Injectable()
export class DataBaseSource implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 6789,
      username: 'postgres',
      password: '123456',
      database: 'EmployeeSearchDb',
      schema: 'public',
      logging: true,
      synchronize: true,
      entities: [
        join(
          process.cwd(),
          'dist',
          'database',
          'entities',
          '**',
          '*.entity.js',
        ),
      ],
    };
  }
}
