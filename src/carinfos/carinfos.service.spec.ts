import { Test, TestingModule } from '@nestjs/testing';
import { CarinfosService } from './carinfos.service';

describe('CarinfosService', () => {
  let service: CarinfosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarinfosService],
    }).compile();

    service = module.get<CarinfosService>(CarinfosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
