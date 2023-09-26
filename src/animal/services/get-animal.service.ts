import { Inject, Injectable } from '@nestjs/common';

import { AnimalM } from '../model/animal';
import { AnimalRepository } from '../model/animalRepository.interface';
import { DatabaseAnimalRepository } from '../model/animalRepository.mongoose';

@Injectable()
export class GetAnimalService {
    constructor(
        @Inject(DatabaseAnimalRepository)
        private readonly animalRepository: AnimalRepository,
    ) {}

    async byId(id: string): Promise<AnimalM> {
        return await this.animalRepository.findById(id);
    }

    async all(): Promise<AnimalM[]> {
        return await this.animalRepository.findAll();
    }
}
