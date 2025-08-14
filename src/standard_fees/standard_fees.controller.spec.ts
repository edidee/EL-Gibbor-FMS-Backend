import { Test, TestingModule } from '@nestjs/testing';
import { StandardFeesController } from './standard_fees.controller';
import { StandardFeesService } from './standard_fees.service';

describe('StandardFeesController', () => {
  let controller: StandardFeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StandardFeesController],
      providers: [StandardFeesService],
    }).compile();

    controller = module.get<StandardFeesController>(StandardFeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
