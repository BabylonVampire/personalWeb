import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { v4 } from 'uuid';
import { resolve, join, extname } from 'path';
import { existsSync, mkdirSync, writeFileSync, access, mkdir } from 'fs';
import { CreateFileDto } from './dto/create-file.dto';
import { Image as ImageModel } from './entities/image.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ImagesService {
	constructor(
		@InjectModel(ImageModel) private imageRepository: typeof ImageModel
	) {}
	async createFileUUID(file) {
		try {
			const { buffer, originalname } = file;
			const fileName = v4() + extname(originalname);
			if (!fileName || fileName.length < 5) {
				throw new Error('Invalid file name');
			}
			const image = await this.imageRepository.create({
				data: buffer,
				name: fileName,
				mimetype: `image/${extname(originalname).substring(1)}`,
			});
			return image.name;
		} catch (error) {
			throw new HttpException(
				'Не удалось записать файл',
				HttpStatus.INTERNAL_SERVER_ERROR
			);
		}
	}

	async createFileWithName(file, createFileDto: CreateFileDto) {
		try {
			const { buffer, originalname } = file;
			const fileName = createFileDto.name + extname(originalname);

			const image = await this.imageRepository.create({
				data: buffer,
				name: fileName,
				mimetype: `image/${extname(originalname).substring(1)}`,
			});
			return image.name;
		} catch (error) {
			throw new HttpException(
				'Не удалось записать файл',
				HttpStatus.INTERNAL_SERVER_ERROR
			);
		}
	}

	async findOne(name: string) {
		try {
			const image = await this.imageRepository.findOne({
				where: { name },
			});
			if (!name) {
				throw new HttpException(
					'Не удалось получить файл',
					HttpStatus.INTERNAL_SERVER_ERROR
				);
			}
			return image;
		} catch (error) {
			throw new HttpException(
				'Не удалось получить файл',
				HttpStatus.INTERNAL_SERVER_ERROR
			);
		}
	}
}
