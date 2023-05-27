import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ImageCreationAttributes {
    key: string;
    alt: string;
	image: string;
}

@Table({ tableName: 'images' })
export class Image extends Model<Image, ImageCreationAttributes> {
    @ApiProperty({ description: 'ID изображения', example: '1' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ description: 'ключ изображения' })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    key: string;

    @ApiProperty({ description: 'Alt изображения' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    alt: string;

    @ApiProperty({ description: 'Изображение' })
    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    image: string;
}