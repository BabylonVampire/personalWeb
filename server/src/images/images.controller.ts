import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@ApiTags("Статьи")
@Controller('amages')
export class ImagesController {
  constructor(private readonly amagesService: ImagesService) {}

  @ApiOperation({ summary: 'Создать новую статью' })
  @ApiResponse({
    status: 201,
    description: 'Статья успешно создана',
    type: Image,
  })
  @ApiBody({ type: CreateImageDto })
  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.amagesService.create(createImageDto);
  }

  @ApiOperation({ summary: 'Вернуть все статьи' })
  @ApiResponse({
    status: 200,
    description: 'Статьи успешно получены',
    type: [Image],
  })
  @Get()
  findAll() {
    return this.amagesService.findAll();
  }

  @ApiOperation({ summary: 'Вернуть одну статью' })
  @ApiResponse({
    status: 200,
    description: 'Статья успешно получена',
    type: Image,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amagesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновить одну статью' })
  @ApiResponse({
    status: 200,
    description: 'Статья успешно обновлена',
    type: Image,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.amagesService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amagesService.remove(+id);
  }
}
