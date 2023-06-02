import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTaleDto {
	@ApiProperty({ description: 'Название истории', example: 'Русский' })
	@IsString({ message: 'Должно быть строкой' })
	readonly title: string;

	@ApiProperty({ description: 'Описание истории', example: 'Русский' })
	@IsString({ message: 'Должно быть строкой' })
	readonly description: string;

	@ApiProperty({ description: 'Наименование истории', example: 'Русский' })
	@IsString({ message: 'Должно быть строкой' })
	readonly name: string;

	@ApiProperty({ description: 'Ссылка истории', example: 'Русский' })
	@IsString({ message: 'Должно быть строкой' })
	readonly link: string;

    @ApiProperty({ description: 'Картинка истории', example: 'Русский', type: 'string', format: 'binary' })
	readonly image: string;

	@ApiProperty({ description: 'Фон истории', example: 'Русский', type: 'string', format: 'binary' })
	readonly backImage: string;

	@ApiProperty({ description: 'Описание истории на главной странице', example: 'Русский' })
	@IsString({ message: 'Должно быть строкой' })
	readonly descriptionPreview: string;
}
