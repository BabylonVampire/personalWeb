import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Image } from './entities/image.entity';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImagesService {
    constructor(@InjectModel(Image) private imageRepository: typeof Image) {

    }

    async create(createImageDto: CreateImageDto) {
        try {
            const image = await this.imageRepository.create(createImageDto);
            if (!image) {
                throw new HttpException(
                    `Не получилось создать новое изображение`,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
            return image;
        } catch (error) {
            return new HttpException(
                'Ошибка при создании нового изображения',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async findAll() {
        try {
            const images = await this.imageRepository.findAll();
            if (!images) {
                throw new HttpException(
                    `Не получилось найти изображения`,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
            return images;
        } catch (error) {
            return new HttpException(
                'Ошибка при получении изображений',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async findOne(id: number) {
        try {
            const image = await this.imageRepository.findByPk(id);
            if (!image) {
                throw new HttpException(
                    `Не получилось найти изображение`,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
            return image;
        } catch (error) {
            return new HttpException(
                'Ошибка при получении изображения',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async update(id: number, updateImageDto: UpdateImageDto) {
        try {
            const image = await this.imageRepository.findByPk(id);
            if (!image) {
                throw new HttpException(
                    `Изображение c id: ${id} не найдено`,
                    HttpStatus.NOT_FOUND,
                );
            }
            await image.update(updateImageDto);
            return image;
        } catch (error) {
            return new HttpException(
                'Ошибка при изменении изображения',
                HttpStatus.INTERNAL_SERVER_ERROR,
                { cause: error },
            );
        }
    }

    remove(id: number) {
        return `This action removes a #${id} image`;
    }
}
