import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ContentBlocksService } from './content-blocks.service';
import { CreateContentBlockDto } from './dto/create-content-block.dto';
import { UpdateContentBlockDto } from './dto/update-content-block.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('content-blocks')
export class ContentBlocksController {
  constructor(private readonly contentBlocksService: ContentBlocksService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createContentBlockDto: CreateContentBlockDto, @UploadedFile() uploadedImage) {
    return this.contentBlocksService.create(createContentBlockDto, uploadedImage);
  }

  @Get()
  findAll() {
    return this.contentBlocksService.findAll();
  }

  @Get('contentId/:contentId')
  findAllByContentId(@Param('contentId') contentId: string) {
    return this.contentBlocksService.findAllByContentId(contentId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentBlocksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentBlockDto: UpdateContentBlockDto) {
    return this.contentBlocksService.update(id, updateContentBlockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentBlocksService.remove(id);
  }
}
