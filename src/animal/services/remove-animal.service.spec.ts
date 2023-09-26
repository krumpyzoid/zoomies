import { Test, TestingModule } from '@nestjs/testing';
import { RemoveAnimalService } from './remove-animal.service';

describe('RemoveAnimalService', () => {
  let service: RemoveAnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveAnimalService],
    }).compile();

    service = module.get<RemoveAnimalService>(RemoveAnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
