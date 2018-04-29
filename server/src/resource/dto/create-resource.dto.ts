export class CreateResourceDto {
	readonly id : string;
	readonly name : string;
	readonly technicalName : string;
	readonly displayName : string;
	readonly resourceOwner: string;
	readonly resourceManager: string;
	readonly status: string;
	readonly architect: string; 
}
