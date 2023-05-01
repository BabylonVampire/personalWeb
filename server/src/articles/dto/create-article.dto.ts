import { IsString } from 'class-validator';

export class CreateArticleDto {
    @IsString({ message: 'Должно быть строкой' })
    readonly title: string;
    @IsString({ message: 'Должно быть строкой' })
    readonly description: string;
    @IsString({ message: 'Должно быть строкой' })
    readonly content: string;
}
