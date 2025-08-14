import { Test, TestingModule } from '@nestjs/testing';
import { ExtraFeesController } from './extra_fees.controller';
import { ExtraFeesService } from './extra_fees.service';

describe('ExtraFeesController', () => {
  let controller: ExtraFeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtraFeesController],
      providers: [ExtraFeesService],
    }).compile();

    controller = module.get<ExtraFeesController>(ExtraFeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
