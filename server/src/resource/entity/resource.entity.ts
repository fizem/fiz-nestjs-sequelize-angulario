import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Resource extends Model<Resource> {
	//@IsUUID(4)
	//@PrimaryKey
	@Column({primaryKey: true})
	id: string;

	@Column(DataType.STRING)
	name: string;

	@Column(DataType.STRING)
	technicalName: string;

	@Column(DataType.STRING)
	displayname: string;

	@Column(DataType.STRING)
	resourceOwner: string;

	@Column(DataType.STRING)
	resourceManager: string;

	@Column(DataType.STRING)
	status: string;

	@Column(DataType.STRING)
	architect: string; 
}
