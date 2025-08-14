import { PartialType } from '@nestjs/mapped-types';
import { CreateStandardFeeDto } from './create-standard_fee.dto';

export class UpdateStandardFeeDto extends PartialType(CreateStandardFeeDto) {}
