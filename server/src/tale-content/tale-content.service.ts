import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaleContentDto } from './dto/create-tale-content.dto';
import { UpdateTaleContentDto } from './dto/update-tale-content.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TaleContent } from './entities/tale-content.entity';

@Injectable()
export class TaleContentService {
	constructor(@InjectModel(TaleContent) private taleContentRepository: typeof TaleContent) { }
	async create(createTaleContentDto: CreateTaleContentDto) {
		try {
			const taleContent = await this.taleContentRepository.create(createTaleContentDto)
			if (!taleContent) {
				return new HttpException(
					'Ошибка при создании контента статьи',
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return taleContent
		} catch (error) {
			throw new HttpException(
				'Ошибка при создании контента статьи',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	findAll() {
		return `This action returns all taleContent`;
	}

	async findOne(id: string) {
		try {
			const taleContent = await this.taleContentRepository.findByPk(id);
			if (!taleContent) {
				throw new HttpException(
					`Не получилось найти контент статьи`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return taleContent;
		} catch (error) {
			throw new HttpException(
				'Ошибка при получении контента статьи',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	update(id: number, updateTaleContentDto: UpdateTaleContentDto) {
		return `This action updates a #${id} taleContent`;
	}

	remove(id: number) {
		return `This action removes a #${id} taleContent`;
	}
}
