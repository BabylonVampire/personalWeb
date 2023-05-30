import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TalesService } from './tales.service';
import { CreateTaleDto } from './dto/create-tale.dto';
import { UpdateTaleDto } from './dto/update-tale.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Tale } from './entities/tale.entity';

@ApiTags("Статьи")
@Controller('tales')
export class TalesController {
	constructor(private readonly talesService: TalesService) { }

	@ApiOperation({ summary: 'Создать новую статью' })
	@ApiResponse({
		status: 201,
		description: 'Статья успешно создана',
		type: Tale,
	})
	@ApiBody({ type: CreateTaleDto })
	@Post()
	create(@Body() createTaleDto: CreateTaleDto) {
		return this.talesService.create(createTaleDto);
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
