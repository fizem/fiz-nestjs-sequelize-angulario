import { Sequelize } from 'sequelize-typescript';
import { Resource } from '../resource/entity/resource.entity';

export const databaseProviders = [
	{
		provide: 'SequelizeToken',
		useFactory: async () => {
			const sequelize = new Sequelize({
				dialect: 'mysql',
				host: 'localhost',
				port: 3306,
				username: 'root',
				password: 'XXXXXXX',
				database: 'NEST',
			});
			sequelize.addModels([Resource]);
			await sequelize.sync();
			return sequelize;
		},
	},
];
