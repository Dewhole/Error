import { Test, TestingModule } from '@nestjs/testing';
import { MetodPostServiceService } from '../service/metod-post-service.service';

describe('MetodPostServiceService', () => {
  let service: MetodPostServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetodPostServiceService],
    }).compile();

    service = module.get<MetodPostServiceService>(MetodPostServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
