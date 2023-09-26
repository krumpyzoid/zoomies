import { Test, TestingModule } from '@nestjs/testing';
import { AddAnimalService } from './add-animal.service';

describe('AddAnimalService', () => {
  let service: AddAnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddAnimalService],
    }).compile();

    service = module.get<AddAnimalService>(AddAnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
