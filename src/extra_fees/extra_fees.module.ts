import { Module } from '@nestjs/common';
import { ExtraFeesService } from './extra_fees.service';
import { ExtraFeesController } from './extra_fees.controller';

@Module({
  controllers: [ExtraFeesController],
  providers: [ExtraFeesService],
})
export class ExtraFeesModule {}
