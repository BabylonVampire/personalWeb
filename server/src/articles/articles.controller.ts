import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Article } from './entities/article.entity';

@ApiTags("Статьи")
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @ApiOperation({ summary: 'Создать новую статью' })
  @ApiResponse({
    status: 201,
    description: 'Статья успешно создана',
    type: Article,
  })
  @ApiBody({ type: CreateArticleDto })
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @ApiOperation({ summary: 'Вернуть все статьи' })
  @ApiResponse({
    status: 200,
    description: 'Статьи успешно получены',
    type: [Article],
  })
  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @ApiOperation({ summary: 'Вернуть одну статью' })
  @ApiResponse({
    status: 200,
    description: 'Статья успешно получена',
    type: Article,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновить одну статью' })
  @ApiResponse({
    status: 200,
    description: 'Статья успешно обновлена',
    type: Article,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
