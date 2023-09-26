import { Test, TestingModule } from '@nestjs/testing';
import { GetAnimalService } from './get-animal.service';

describe('GetAnimalService', () => {
  let service: GetAnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAnimalService],
    }).compile();

    service = module.get<GetAnimalService>(GetAnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
