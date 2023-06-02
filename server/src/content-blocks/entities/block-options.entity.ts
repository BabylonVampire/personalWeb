import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ContentBlock } from "./content-block.entity";

@Table({ tableName: 'block-options' })
export class BlockOptions extends Model<BlockOptions> {
	@ApiProperty({ description: 'ID опций блока контента истории', example: '1' })
	@Column({
		type: DataType.UUID,
		unique: true,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
	})
	id: string;

	@ApiProperty({ description: 'ID блока контента истории' })
	@ForeignKey(() => ContentBlock)
	@Column({
		type: DataType.UUID,
	})
	blockId: string;

	@ApiProperty({ description: 'Направление появления блока' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
	appearanceDirection: string;
	
	@ApiProperty({ description: 'Расположение блока на странице' })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
	position: string;
}