import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Image as ImageModel } from './entities/image.entity';

@Module({
	providers: [ImagesService],
	controllers: [ImagesController],
	exports: [ImagesService],
	imports: [SequelizeModule.forFeature([ImageModel])],
})
export class ImagesModule {}
