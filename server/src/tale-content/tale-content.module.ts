import { Module } from '@nestjs/common';
import { TaleContentService } from './tale-content.service';
import { TaleContentController } from './tale-content.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tale } from 'src/tales/entities/tale.entity';
import { TaleContent } from './entities/tale-content.entity';
import { ContentBlock } from 'src/content-blocks/entities/content-block.entity';

@Module({
	controllers: [TaleContentController],
	providers: [TaleContentService],
	imports: [
		SequelizeModule.forFeature([TaleContent, ContentBlock]),
	]
})
export class TaleContentModule { }
