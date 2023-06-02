import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { TaleContent } from "src/tale-content/entities/tale-content.entity";

@Table({ tableName: 'tales' })
export class Tale extends Model<Tale> {
    
    @ApiProperty({ description: 'ID истории' })
    @Column({
        type: DataType.UUID,
        unique: true,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id: string;

    @ApiProperty({ description: 'Заголовок истории' })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    title: string;

    @ApiProperty({ description: 'Описание истории' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

	@ApiProperty({ description: 'Наименование истории' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

	@ApiProperty({ description: 'Ссылка истории' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    link: string;

	@ApiProperty({ description: 'Описание истории на главной странице' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
	descriptionPreview: string;

	@ApiProperty({ description: 'Картинка истории' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
	image: string;

	@ApiProperty({ description: 'Фон истории истории' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
	backImage: string;

    @HasOne(() => TaleContent)
	content: TaleContent;
}
