import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaleContentService } from './tale-content.service';
import { CreateTaleContentDto } from './dto/create-tale-content.dto';
import { UpdateTaleContentDto } from './dto/update-tale-content.dto';

@Controller('tale-content')
export class TaleContentController {
  constructor(private readonly taleContentService: TaleContentService) {}

  @Post()
  create(@Body() createTaleContentDto: CreateTaleContentDto) {
    return this.taleContentService.create(createTaleContentDto);
  }

  @Get()
  findAll() {
    return this.taleContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taleContentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaleContentDto: UpdateTaleContentDto) {
    return this.taleContentService.update(+id, updateTaleContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taleContentService.remove(+id);
  }
}
