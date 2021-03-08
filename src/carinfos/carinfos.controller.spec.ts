import { Test, TestingModule } from '@nestjs/testing';
import { CarinfosController } from './carinfos.controller';

describe('CarinfosController', () => {
  let controller: CarinfosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarinfosController],
    }).compile();

    controller = module.get<CarinfosController>(CarinfosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
