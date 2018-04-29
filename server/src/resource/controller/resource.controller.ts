import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateResourceDto } from '../dto/create-resource.dto';
import { ResourceService } from '../service/resource.service';
import { Resource } from '../entity/resource.entity';

@Controller('resources')
export class ResourcesController {
	constructor (private readonly resourceService: ResourceService) {}

	@Post()
	async create(@Body() createResourceDto: CreateResourceDto) {
		await this.resourceService.create (createResourceDto);
	}

	@Get()
	async findAll(): Promise<Resource[]> {
		return await this.resourceService.findAll();
	}
}
