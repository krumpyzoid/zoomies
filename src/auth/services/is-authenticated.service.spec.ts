import { Test, TestingModule } from '@nestjs/testing';
import { IsAuthenticatedService } from './is-authenticated.service';

describe('IsAuthenticatedService', () => {
  let service: IsAuthenticatedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsAuthenticatedService],
    }).compile();

    service = module.get<IsAuthenticatedService>(IsAuthenticatedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
