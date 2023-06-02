import { Module } from '@nestjs/common';
import { TalesService } from './tales.service';
import { TalesController } from './tales.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tale } from './entities/tale.entity';
import { TaleContent } from 'src/tale-content/entities/tale-content.entity';
import { ImagesModule } from 'src/images/images.module';

@Module({
	controllers: [TalesController],
	providers: [TalesService],
	imports: [
		SequelizeModule.forFeature([Tale, TaleContent]),
		ImagesModule
	]
})
export class TalesModule { }
