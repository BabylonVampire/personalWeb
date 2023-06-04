import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'image' })
export class Image extends Model<Image> {
	@Column({
		type: DataType.BLOB,
		allowNull: false,
	})
	data: Buffer;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
	})
	name: string;

	@Column({
		type: DataType.STRING,
	})
	mimetype: string;
}
