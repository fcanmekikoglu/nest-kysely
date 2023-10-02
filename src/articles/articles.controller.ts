import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import FindOneParams from 'src/utils/findOneParams';
import { ArticlesService } from './articles.service';
import ArticleDto from './dto/article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getAll() {
    return this.articlesService.getAll();
  }

  @Get(':id')
  getById(@Param() { id }: FindOneParams) {
    return this.articlesService.getById(id);
  }

  @Post()
  create(@Body() data: ArticleDto) {
    return this.articlesService.create(data);
  }

  @Put(':id')
  update(@Param() { id }: FindOneParams, @Body() data: ArticleDto) {
    return this.articlesService.update(id, data);
  }
}
