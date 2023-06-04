import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateContentBlockDto } from './dto/create-content-block.dto';
import { UpdateContentBlockDto } from './dto/update-content-block.dto';
import { ContentBlock } from './entities/content-block.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BlockOptions } from './entities/block-options.entity';
import { ImagesService } from 'src/images/images.service';

@Injectable()
export class ContentBlocksService {
	private logger = new Logger('Content Block');
	constructor(
		@InjectModel(ContentBlock)
		private contentBlockRepository: typeof ContentBlock,
		@InjectModel(BlockOptions)
		private blockOptionsRepository: typeof BlockOptions,
		private imagesService: ImagesService
	) {}

	async create(createContentBlockDto: CreateContentBlockDto, uploadedImage) {
		try {
			let fileName: string;
			if (uploadedImage) {
				fileName = await this.imagesService.createFileUUID(
					uploadedImage
				);
			}
			const contentBlockDto = {
				contentId: createContentBlockDto.contentId,
				index: +createContentBlockDto.index,
				className: createContentBlockDto.className,
				type: createContentBlockDto.type,
				text: createContentBlockDto.text,
				image: fileName,
			};
			this.logger.log(contentBlockDto);
			const contentBlock = await this.contentBlockRepository.create(
				contentBlockDto
			);
			const blockOptionsDto = {
				blockId: contentBlock.id,
				appearanceDirection: createContentBlockDto.appearanceDirection,
				position: createContentBlockDto.position,
			};
			const blockOptions = await this.blockOptionsRepository.create(
				blockOptionsDto
			);
			if (!(contentBlock && blockOptions)) {
				throw new HttpException(
					'Не получилось создать блок контента или его опции♿️♿️♿️',
					HttpStatus.INTERNAL_SERVER_ERROR
				);
			}
			const contentBlockWithOptions =
				this.contentBlockRepository.findByPk(contentBlock.id, {
					include: { model: BlockOptions },
				});
			return contentBlockWithOptions;
		} catch (error) {
			throw new HttpException(
				'Ошибка при создании блока контента',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error?.message }
			);
		}
	}

	async findAll() {
		try {
			const contentBlocks = await this.contentBlockRepository.findAll({
				include: { model: BlockOptions },
			});
			if (!contentBlocks) {
				throw new HttpException(
					'Ошибка при получении блоков контента♿️♿️♿️',
					HttpStatus.INTERNAL_SERVER_ERROR
				);
			}
			return contentBlocks;
		} catch (error) {
			throw new HttpException(
				'Ошибка при получении блоков контента♿️♿️♿️',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error?.message }
			);
		}
	}

	async findAllByContentId(contentId: string) {
		try {
			const contentBlocks = await this.contentBlockRepository.findAll({
				where: { contentId: contentId },
				include: { model: BlockOptions },
			});
			if (!contentBlocks) {
				throw new HttpException(
					'Ошибка при получении блоков контента♿️♿️♿️',
					HttpStatus.INTERNAL_SERVER_ERROR
				);
			}
			return contentBlocks;
		} catch (error) {
			throw new HttpException(
				'Ошибка при получении блоков контентаy♿️♿️♿️',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error?.message }
			);
		}
	}

	async findOne(id: string) {
		try {
			const contentBlock = await this.contentBlockRepository.findByPk(
				id,
				{ include: { model: BlockOptions } }
			);
			if (!contentBlock) {
				throw new HttpException(
					'Ошибка при получении блока контента♿️♿️♿️',
					HttpStatus.INTERNAL_SERVER_ERROR
				);
			}
			return contentBlock;
		} catch (error) {
			throw new HttpException(
				'Ошибка при получении параметров блока♿️♿️♿️',
				HttpStatus.INTERNAL_SERVER_ERROR,
				{ cause: error?.message }
			);
		}
	}

	update(id: string, updateContentBlockDto: UpdateContentBlockDto) {
		return `This action updates a #${id} contentBlock`;
	}

	remove(id: string) {
		return `This action removes a #${id} contentBlock`;
	}
}
