import { Test, TestingModule } from '@nestjs/testing';
import { StandardFeesService } from './standard_fees.service';

describe('StandardFeesService', () => {
  let service: StandardFeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StandardFeesService],
    }).compile();

    service = module.get<StandardFeesService>(StandardFeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
