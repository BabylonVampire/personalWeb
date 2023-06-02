import { Module } from '@nestjs/common';
import { ContentBlocksService } from './content-blocks.service';
import { ContentBlocksController } from './content-blocks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ContentBlock } from './entities/content-block.entity';
import { BlockOptions } from './entities/block-options.entity';
import { ImagesModule } from 'src/images/images.module';

@Module({
  controllers: [ContentBlocksController],
  providers: [ContentBlocksService],
  imports: [
		SequelizeModule.forFeature([ContentBlock, BlockOptions]),
    ImagesModule
	]
})
export class ContentBlocksModule {}
