import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaleDto } from './dto/create-tale.dto';
import { UpdateTaleDto } from './dto/update-tale.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Tale } from './entities/tale.entity';
import { TaleContentService } from 'src/tale-content/tale-content.service';
import { TaleContent } from 'src/tale-content/entities/tale-content.entity';

@Injectable()
export class TalesService {
	constructor(@InjectModel(Tale) private taleRepository: typeof Tale) {

	}

	async create(createTaleDto: CreateTaleDto) {
		try {
			const tale = await this.taleRepository.create(createTaleDto);
			if (!tale) {
				throw new HttpException(
					`Не получилось создать новую статью`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return tale;
		} catch (error) {
			throw new HttpException(
				'Ошибка при создании новой статьи',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async findAll() {
		try {
			const tales = await this.taleRepository.findAll();
			if (!tales) {
				throw new HttpException(
					`Не получилось найти статьи`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return tales;
		} catch (error) {
			throw new HttpException(
				'Ошибка при получении статей',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async findOne(title: string) {
		try {
			const tale = await this.taleRepository.findOne({
				where: { title },
				include: [
					{ model: TaleContent }
				]
			});
			if (!tale) {
				throw new HttpException(
					`Не получилось найти статью`,
					HttpStatus.INTERNAL_SERVER_ERROR,
				);
			}
			return tale;
		} catch (error) {
			throw new HttpException(
				'Ошибка при получении статьи',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async update(id: string, updateTaleDto: UpdateTaleDto) {
		try {
			const tale = await this.taleRepository.findByPk(id);
			if (!tale) {
				throw new HttpException(
					`Статья c id: ${id} не найдена`,
					HttpStatus.NOT_FOUND,
				);
			}
			await tale.update(updateTaleDto);
			return tale;
		} catch (error) {
			throw new HttpException(
				'Ошибка при изменении статьи',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}

	async remove(id: number) {
		try {
			const tale = await this.taleRepository.findByPk(id);
			if (!tale) {
				throw new HttpException(
					`История с id: ${id} не найдена`,
					HttpStatus.NOT_FOUND,
				);
			}
			await this.taleRepository.destroy({
				where: { id },
			});
			return 'Удалено успешно';
		} catch (error) {
			throw new HttpException(
				'Ошибка при удалении статьи',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error },
			);
		}
	}
}
