import { Module } from '@nestjs/common';
import { AddAnimalService } from './services/add-animal.service';
import { GetAnimalService } from './services/get-animal.service';
import { UpdateAnimalService } from './services/update-animal.service';
import { RemoveAnimalService } from './services/remove-animal.service';
import { AnimalController } from './animal.controller';
import { Animal, AnimalSchema } from './model/animal.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from 'src/logger/logger.service';
import { DatabaseAnimalRepository } from './model/animalRepository.mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }])],
    providers: [
        AddAnimalService,
        GetAnimalService,
        UpdateAnimalService,
        RemoveAnimalService,
        LoggerService,
        DatabaseAnimalRepository,
    ],
    exports: [AddAnimalService, GetAnimalService, UpdateAnimalService, RemoveAnimalService],
    controllers: [AnimalController],
})
export class AnimalModule {}
