import { Injectable } from '@nestjs/common';
import { CreateExtraFeeDto } from './dto/create-extra_fee.dto';
import { UpdateExtraFeeDto } from './dto/update-extra_fee.dto';

@Injectable()
export class ExtraFeesService {
  create(createExtraFeeDto: CreateExtraFeeDto) {
    return 'This action adds a new extraFee';
  }

  findAll() {
    return `This action returns all extraFees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} extraFee`;
  }

  update(id: number, updateExtraFeeDto: UpdateExtraFeeDto) {
    return `This action updates a #${id} extraFee`;
  }

  remove(id: number) {
    return `This action removes a #${id} extraFee`;
  }
}
