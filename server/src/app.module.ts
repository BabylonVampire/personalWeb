import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { TalesModule } from './tales/tales.module';
import { Tale } from './tales/entities/tale.entity';
import { TaleContentModule } from './tale-content/tale-content.module';
import { TaleContent } from './tale-content/entities/tale-content.entity';
import { ContentBlocksModule } from './content-blocks/content-blocks.module';
import { ContentBlock } from './content-blocks/entities/content-block.entity';
import { BlockOptions } from './content-blocks/entities/block-options.entity';
import { ImagesModule } from './images/images.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
	imports: [ConfigModule.forRoot({
		envFilePath: `.env`,
	}),
	ServeStaticModule.forRoot({
		rootPath: resolve(__dirname, 'static'),
	}), SequelizeModule.forRoot({
		dialect: 'postgres',
		host: process.env.HOST,
		port: Number(process.env.POSTGRES_PORT),
		username: process.env.POSTGRES_USER,
		password: String(process.env.POSTGRES_PASSWORD),
		database: process.env.POSTGRES_DB,
		models: [Tale, TaleContent, ContentBlock, BlockOptions],
		autoLoadModels: true,
		synchronize: true,
	}), TalesModule, TaleContentModule, ContentBlocksModule, ImagesModule,],
	controllers: [],
	providers: [],
})
export class AppModule { }
