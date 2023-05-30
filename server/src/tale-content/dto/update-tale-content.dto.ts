import { PartialType } from '@nestjs/swagger';
import { CreateTaleContentDto } from './create-tale-content.dto';

export class UpdateTaleContentDto extends PartialType(CreateTaleContentDto) {}
