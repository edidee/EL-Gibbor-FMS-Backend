import { PartialType } from '@nestjs/mapped-types';
import { CreateExtraFeeDto } from './create-extra_fee.dto';

export class UpdateExtraFeeDto extends PartialType(CreateExtraFeeDto) {}
