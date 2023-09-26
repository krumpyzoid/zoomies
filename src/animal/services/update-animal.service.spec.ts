import { Test, TestingModule } from '@nestjs/testing';
import { UpdateAnimalService } from './update-animal.service';

describe('UpdateAnimalService', () => {
  let service: UpdateAnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateAnimalService],
    }).compile();

    service = module.get<UpdateAnimalService>(UpdateAnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
