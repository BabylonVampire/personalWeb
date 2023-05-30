import { Module } from '@nestjs/common';
import { TalesService } from './tales.service';
import { TalesController } from './tales.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tale } from './entities/tale.entity';
import { TaleContentModule } from 'src/tale-content/tale-content.module';
import { TaleContent } from 'src/tale-content/entities/tale-content.entity';

@Module({
	controllers: [TalesController],
	providers: [TalesService],
	imports: [
		SequelizeModule.forFeature([Tale, TaleContent]),
	]
})
export class TalesModule { }
