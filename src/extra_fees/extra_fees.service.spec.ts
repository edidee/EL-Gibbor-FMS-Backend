import { Test, TestingModule } from '@nestjs/testing';
import { ExtraFeesService } from './extra_fees.service';

describe('ExtraFeesService', () => {
  let service: ExtraFeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtraFeesService],
    }).compile();

    service = module.get<ExtraFeesService>(ExtraFeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
