import {
	Body,
	Controller,
	Get,
	Logger,
	Param,
	Post,
	Res,
	UploadedFile,
	UseInterceptors,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateFileDto } from './dto/create-file.dto';

@Controller('images')
export class ImagesController {
	logger = new Logger('Images Controller');
	constructor(private readonly imagesService: ImagesService) {}

	@Post()
	@UseInterceptors(FileInterceptor('image'))
	createImage(@Body() createFileDto: CreateFileDto, @UploadedFile() image) {
		return this.imagesService.createFileWithName(image, createFileDto);
	}

	@Get(':name')
	async findOne(@Param('name') name: string, @Res() res) {
		const image = await this.imagesService.findOne(name);
		res.set('Content-Type', image.mimetype);
		res.set('Content-Length', image.data.length);
		res.send(image.data);
		res.end();
	}
}
