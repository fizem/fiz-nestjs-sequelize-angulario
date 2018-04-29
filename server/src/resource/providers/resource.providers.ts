import { Resource } from '../entity/resource.entity';

export const resourcesProviders = [
	{
		provide: 'ResourcesRepository',
		useValue: Resource,
	},
];
