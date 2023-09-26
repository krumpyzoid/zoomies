import { LoggerService } from 'src/logger/logger.service';
import { Injectable } from '@nestjs/common';
import { ILogger } from 'src/logger/logger.interface';
import { Inject } from '@nestjs/common';
import { DatabaseAnimalRepository } from '../model/animalRepository.mongoose';
import { AnimalM } from '../model/animal';
import { AnimalRepository } from '../model/animalRepository.interface';

@Injectable()
export class AddAnimalService {
    constructor(
        @Inject(LoggerService)
        private readonly logger: ILogger,
        @Inject(DatabaseAnimalRepository)
        private readonly animalRepository: AnimalRepository,
    ) {}

    async execute(content: string): Promise<AnimalM> {
        const animal = new AnimalM();

        const result = await this.animalRepository.insert(animal);
        this.logger.log('addAnimalUseCases execute', 'New animal have been inserted');
        return result;
    }
}
