import { TypeOrmModuleOptions }  from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '172.19.0.1',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'taskmanagement',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
}