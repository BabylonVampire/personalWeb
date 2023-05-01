import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
    constructor(@InjectModel(Article) private articleRepository: typeof Article) {

    }

    async create(createArticleDto: CreateArticleDto) {
        try {
            const article = await this.articleRepository.create(createArticleDto);
            if (!article) {
                throw new HttpException(
                    `Не получилось создать новую статью`,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
            return article;
        } catch (error) {
            return new HttpException(
                'Ошибка при создании новой статьи',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async findAll() {
        try {
            const articles = await this.articleRepository.findAll();
            if (!articles) {
                throw new HttpException(
                    `Не получилось найти статьи`,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
            return articles;
        } catch (error) {
            return new HttpException(
                'Ошибка при получении статей',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async findOne(id: number) {
        try {
            const article = await this.articleRepository.findByPk(id);
            if (!article) {
                throw new HttpException(
                    `Не получилось найти статью`,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
            return article;
        } catch (error) {
            return new HttpException(
                'Ошибка при получении статьи',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async update(id: number, updateArticleDto: UpdateArticleDto) {
        try {
            const article = await this.articleRepository.findByPk(id);
            if (!article) {
                throw new HttpException(
                    `Статья c id: ${id} не найдена`,
                    HttpStatus.NOT_FOUND,
                );
            }
            await article.update(updateArticleDto);
            return article;
        } catch (error) {
            return new HttpException(
                'Ошибка при изменении статьи',
                HttpStatus.INTERNAL_SERVER_ERROR,
                { cause: error },
            );
        }
    }

    remove(id: number) {
        return `This action removes a #${id} article`;
    }
}
