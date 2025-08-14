import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StandardFeesService } from './standard_fees.service';
import { CreateStandardFeeDto } from './dto/create-standard_fee.dto';
import { UpdateStandardFeeDto } from './dto/update-standard_fee.dto';

@Controller('standard-fees')
export class StandardFeesController {
  constructor(private readonly standardFeesService: StandardFeesService) {}

  @Post()
  create(@Body() createStandardFeeDto: CreateStandardFeeDto) {
    return this.standardFeesService.create(createStandardFeeDto);
  }

  @Get()
  findAll() {
    return this.standardFeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.standardFeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStandardFeeDto: UpdateStandardFeeDto) {
    return this.standardFeesService.update(+id, updateStandardFeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.standardFeesService.remove(+id);
  }
}
