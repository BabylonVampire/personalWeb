import { PartialType } from '@nestjs/swagger';
import { CreateTaleDto } from './create-tale.dto';

export class UpdateTaleDto extends PartialType(CreateTaleDto) {}
