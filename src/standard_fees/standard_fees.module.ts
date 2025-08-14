import { Module } from '@nestjs/common';
import { StandardFeesService } from './standard_fees.service';
import { StandardFeesController } from './standard_fees.controller';

@Module({
  controllers: [StandardFeesController],
  providers: [StandardFeesService],
})
export class StandardFeesModule {}
