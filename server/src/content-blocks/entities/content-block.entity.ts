import { ApiProperty } from '@nestjs/swagger';
import {
	Column,
	DataType,
	ForeignKey,
	HasOne,
	Model,
	Table,
} from 'sequelize-typescript';
import { TaleContent } from 'src/tale-content/entities/tale-content.entity';
import { BlockOptions } from './block-options.entity';

@Table({ tableName: 'content-blocks' })
export class ContentBlock extends Model<ContentBlock> {
	@ApiProperty({ description: 'ID блока контента истории', example: '1' })
	@Column({
		type: DataType.UUID,
		unique: true,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
	})
	id: string;

	@ApiProperty({ description: 'ID контента истории' })
	@ForeignKey(() => TaleContent)
	@Column({
		type: DataType.UUID,
	})
	contentId: string;

	@ApiProperty({ description: 'Индекс блока' })
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	index: number;

	@ApiProperty({ description: 'Имя класса блока' })
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	className: string;

	@ApiProperty({ description: 'Тип блока' })
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	type: string;

	@ApiProperty({ description: 'Содержание блока' })
	@Column({
		type: DataType.TEXT,
		allowNull: false,
	})
	text: string;

	@ApiProperty({ description: 'Ссылка на картинку блока' })
	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	image: string;

	@HasOne(() => BlockOptions)
	options: BlockOptions;
}
