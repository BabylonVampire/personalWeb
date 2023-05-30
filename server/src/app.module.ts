import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { TalesModule } from './tales/tales.module';
import { Tale } from './tales/entities/tale.entity';
import { TaleContentModule } from './tale-content/tale-content.module';
import { TaleContent } from './tale-content/entities/tale-content.entity';

@Module({
    imports: [ConfigModule.forRoot({
        envFilePath: `.env`,
    }), SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: String(process.env.POSTGRES_PASSWORD),
        database: process.env.POSTGRES_DB,
        models: [Tale, TaleContent],
        autoLoadModels: true,
        synchronize: true,
    }), TalesModule, TaleContentModule,],
    controllers: [],
    providers: [],
})
export class AppModule { }
