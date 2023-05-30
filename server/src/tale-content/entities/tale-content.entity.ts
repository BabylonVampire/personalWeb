import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Tale } from "src/tales/entities/tale.entity";

@Table({ tableName: 'tale-content' })
export class TaleContent extends Model<TaleContent> {

	@ApiProperty({ description: 'ID контента истории', example: '1' })
	@Column({
		type: DataType.UUID,
		unique: true,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
	})
	id: string;

	@ApiProperty({ description: 'Контент истории' })
	@Column({
		type: DataType.JSONB,
		allowNull: true,
	})
	content: string

	@ApiProperty({ description: 'ID истории' })
    @ForeignKey(() => Tale)
    @Column({
      type: DataType.UUID,
    })
    taleId: string;
}
