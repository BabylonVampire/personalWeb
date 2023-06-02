import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ImagesService } from './images.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateFileDto } from './dto/create-file.dto';

@Controller('images')
export class ImagesController {
	constructor(private readonly imagesService: ImagesService){}

	@Post()
	@UseInterceptors(FileInterceptor('image'))
	createImage(@Body() createFileDto: CreateFileDto, @UploadedFile() image) {
		return this.imagesService.createFileWithName(image, createFileDto)
	}
}
