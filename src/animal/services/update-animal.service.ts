import { Injectable, Inject } from '@nestjs/common';
import { DatabaseAnimalRepository } from '../model/animalRepository.mongoose';
import { LoggerService } from 'src/logger/logger.service';
import { ILogger } from 'src/logger/logger.interface';

import { AnimalRepository } from '../model/animalRepository.interface';

@Injectable()
export class UpdateAnimalService {
    constructor(
        @Inject(LoggerService)
        private readonly logger: ILogger,
        @Inject(DatabaseAnimalRepository)
        private readonly animalRepository: AnimalRepository,
    ) {}

    async execute(id: string, isDone: boolean): Promise<void> {
        await this.animalRepository.updateContent(id, isDone);
        this.logger.log('updateAnimalUseCases execute', `Animal ${id} have been updated`);
    }
}
