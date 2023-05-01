import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ArticleCreationAttributes {
    title: string;
    description: string;
}

@Table({ tableName: 'articles' })
export class Article extends Model<Article, ArticleCreationAttributes> {
    @ApiProperty({ description: 'ID статьи', example: '1' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ description: 'Заголовок статьи' })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    title: string;

    @ApiProperty({ description: 'Описание статьи' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @ApiProperty({ description: 'Контент статьи' })
    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    content: string;
}
