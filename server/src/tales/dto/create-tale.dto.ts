import { ApiProperty } from '@nestjs/swagger';
import { IsJSON, IsString } from 'class-validator';

export class CreateTaleDto {
	@ApiProperty({ description: 'Название статьи', example: 'Русский' })
    @IsString({ message: 'Должно быть строкой' })
    readonly title: string;

	@ApiProperty({ description: 'Описание статьи', example: 'Русский' })
    @IsString({ message: 'Должно быть строкой' })
    readonly description: string;

}
