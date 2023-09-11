import { Test, TestingModule } from '@nestjs/testing';
import { PriceMoneroToMirService } from './price-monero-to-mir.service';

describe('PriceMoneroToMirService', () => {
  let service: PriceMoneroToMirService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceMoneroToMirService],
    }).compile();

    service = module.get<PriceMoneroToMirService>(PriceMoneroToMirService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
