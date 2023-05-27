import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ImagesService } from './images.service';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  imports: [
    SequelizeModule.forFeature([Image]),
  ]
})
export class ImagesModule {}
