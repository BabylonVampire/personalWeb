import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateContentBlockDto {
	//content block
	@ApiProperty()
	readonly contentId: string; 
	@ApiProperty()
	readonly index: string; 
	@ApiProperty()
	readonly className: string; 
	@ApiProperty()
	readonly type: string; 
	@ApiProperty()
	readonly text: string; 
	@ApiProperty()
	readonly image: string

	//options
	@ApiProperty()
	readonly appearanceDirection: string;
	@ApiProperty()
	readonly position: string;
}
