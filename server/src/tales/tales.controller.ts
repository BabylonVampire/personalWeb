import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, Logger } from '@nestjs/common';
import { TalesService } from './tales.service';
import { CreateTaleDto } from './dto/create-tale.dto';
import { UpdateTaleDto } from './dto/update-tale.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Tale } from './entities/tale.entity';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@ApiTags("Статьи")
@Controller('tales')
export class TalesController {
	logger = new Logger('Tales Controller')
	constructor(private readonly talesService: TalesService) { }

	@ApiOperation({ summary: 'Создать новую статью' })
	@ApiResponse({
		status: 201,
		description: 'Статья успешно создана',
		type: Tale,
	})
	@ApiBody({ type: CreateTaleDto })
	@Post()
	@UseInterceptors(FileFieldsInterceptor([
		{ name: 'image', maxCount: 1 },
		{ name: 'backImage', maxCount: 1 },
	  ]))
	create(@Body() createTaleDto: CreateTaleDto, @UploadedFiles() files) {
		const image = files.image[0];
		const backImage = files.backImage[0];
		return this.talesService.create(createTaleDto, image, backImage);
	}

	@ApiOperation({ summary: 'Вернуть все статьи' })
	@ApiResponse({
		status: 200,
		description: 'Статьи успешно получены',
		type: [Tale],
	})
	@Get()
	findAll() {
		return this.talesService.findAll();
	}

	@ApiOperation({ summary: 'Вернуть одну статью' })
	@ApiResponse({
		status: 200,
		description: 'Статья успешно получена',
		type: Tale,
	})
	@Get(':title')
	findOne(@Param('title') title: string) {
		return this.talesService.findOne(title);
	}

	@ApiOperation({ summary: 'Обновить одну статью' })
	@ApiResponse({
		status: 200,
		description: 'Статья успешно обновлена',
		type: Tale,
	})
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTaleDto: UpdateTaleDto) {
		return this.talesService.update(id, updateTaleDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.talesService.remove(+id);
	}
}
