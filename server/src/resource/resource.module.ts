import { Module } from '@nestjs/common';
import { ResourcesController} from './controller/resource.controller';
import { ResourceService } from './service/resource.service';
import { resourcesProviders } from './providers/resource.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
	imports: [DatabaseModule],
	// controllers: [ResourcesController],
	providers:[ResourceService, ...resourcesProviders],
})

export class ResourceModule {}
