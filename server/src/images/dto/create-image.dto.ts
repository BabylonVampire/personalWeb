import { IsString } from 'class-validator';

export class CreateImageDto {
    @IsString({ message: 'Должно быть строкой' })
    readonly key: string;
    @IsString({ message: 'Должно быть строкой' })
    readonly alt: string;
    @IsString({ message: 'Должно быть строкой' })
    readonly image: string;
}
