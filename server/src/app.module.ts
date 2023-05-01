import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticlesModule } from './articles/articles.module';
import { Article } from './articles/entities/article.entity';

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
        models: [Article],
        autoLoadModels: true,
        synchronize: true,
    }), ArticlesModule,],
    controllers: [],
    providers: [],
})
export class AppModule { }
