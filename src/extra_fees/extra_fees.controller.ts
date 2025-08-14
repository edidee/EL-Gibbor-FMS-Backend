import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExtraFeesService } from './extra_fees.service';
import { CreateExtraFeeDto } from './dto/create-extra_fee.dto';
import { UpdateExtraFeeDto } from './dto/update-extra_fee.dto';

@Controller('extra-fees')
export class ExtraFeesController {
  constructor(private readonly extraFeesService: ExtraFeesService) {}

  @Post()
  create(@Body() createExtraFeeDto: CreateExtraFeeDto) {
    return this.extraFeesService.create(createExtraFeeDto);
  }

  @Get()
  findAll() {
    return this.extraFeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.extraFeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExtraFeeDto: UpdateExtraFeeDto) {
    return this.extraFeesService.update(+id, updateExtraFeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.extraFeesService.remove(+id);
  }
}
