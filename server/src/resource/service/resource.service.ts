import { Injectable, Inject } from '@nestjs/common';
import { CreateResourceDto } from '../dto/create-resource.dto';
import { Resource } from '../entity/resource.entity';

@Injectable()
export class ResourceService {
  constructor(
	@Inject('ResourcesRepository') private readonly resourcesRepository: typeof Resource,) {}

  async findAll(): Promise<Resource[]> {
    return await this.resourcesRepository.findAll<Resource>();
  }
}
