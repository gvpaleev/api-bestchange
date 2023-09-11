import { Test, TestingModule } from '@nestjs/testing';
import { PriceMoneroToMirController } from './price-monero-to-mir.controller';

describe('PriceMoneroToMirController', () => {
  let controller: PriceMoneroToMirController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceMoneroToMirController],
    }).compile();

    controller = module.get<PriceMoneroToMirController>(PriceMoneroToMirController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
