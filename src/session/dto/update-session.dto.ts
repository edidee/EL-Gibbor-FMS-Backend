import { PartialType } from '@nestjs/mapped-types';
import { CreateSessionDto } from './create-session.dto';
import { IsNumber } from 'class-validator';

export class UpdateSessionDto extends PartialType(CreateSessionDto) {}
