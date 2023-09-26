import { Injectable, Inject } from '@nestjs/common';
import { DatabaseAnimalRepository } from '../model/animalRepository.mongoose';
import { LoggerService } from 'src/logger/logger.service';
import { ILogger } from 'src/logger/logger.interface';
import { AnimalRepository } from '../model/animalRepository.interface';

@Injectable()
export class RemoveAnimalService {
    constructor(
        @Inject(LoggerService)
        private readonly logger: ILogger,
        @Inject(DatabaseAnimalRepository)
        private readonly animalRepository: AnimalRepository,
    ) {}

    async execute(id: string): Promise<void> {
        await this.animalRepository.deleteById(id);
        this.logger.log('deleteAnimalUseCases execute', `Animal ${id} have been deleted`);
    }
}
