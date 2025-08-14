import { Injectable } from '@nestjs/common';
import { CreateStandardFeeDto } from './dto/create-standard_fee.dto';
import { UpdateStandardFeeDto } from './dto/update-standard_fee.dto';

@Injectable()
export class StandardFeesService {
  create(createStandardFeeDto: CreateStandardFeeDto) {
    return 'This action adds a new standardFee';
  }

  findAll() {
    return `This action returns all standardFees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} standardFee`;
  }

  update(id: number, updateStandardFeeDto: UpdateStandardFeeDto) {
    return `This action updates a #${id} standardFee`;
  }

  remove(id: number) {
    return `This action removes a #${id} standardFee`;
  }
}
