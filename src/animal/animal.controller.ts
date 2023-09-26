import { Body, Controller, Delete, Get, Inject, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetAnimalService } from './services/get-animal.service';
import { AnimalPresenter } from './animal.presenter';
import { ApiResponseType } from 'src/response/response.decorator';
import { UpdateAnimalService } from './services/update-animal.service';
import { AddAnimalDto, UpdateAnimalDto } from './animal.dto';
import { RemoveAnimalService } from './services/remove-animal.service';
import { AddAnimalService } from './services/add-animal.service';

@Controller('animal')
@ApiTags('animal')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(AnimalPresenter)
export class AnimalController {
    constructor(
        @Inject(GetAnimalService)
        private getAnimalUsecases: GetAnimalService,
        @Inject(UpdateAnimalService)
        private updateAnimalUsecases: UpdateAnimalService,
        @Inject(RemoveAnimalService)
        private deleteAnimalUsecases: RemoveAnimalService,
        @Inject(AddAnimalService)
        private addAnimalUsecases: AddAnimalService,
    ) {}

    @Get('animal')
    @ApiResponseType(AnimalPresenter, false)
    async getAnimal(@Query('id', ParseIntPipe) id: string) {
        const animal = await this.getAnimalUsecases.byId(id);
        return new AnimalPresenter(animal);
    }

    @Get('animals')
    @ApiResponseType(AnimalPresenter, true)
    async getAnimals() {
        const animals = await this.getAnimalUsecases.all();
        return animals.map((animal) => new AnimalPresenter(animal));
    }

    @Put('animal')
    @ApiResponseType(AnimalPresenter, true)
    async updateAnimal(@Body() updateAnimalDto: UpdateAnimalDto) {
        const { id, isDone } = updateAnimalDto;
        await this.updateAnimalUsecases.execute(id, isDone);
        return 'success';
    }

    @Delete('animal')
    @ApiResponseType(AnimalPresenter, true)
    async deleteAnimal(@Query('id', ParseIntPipe) id: string) {
        await this.deleteAnimalUsecases.execute(id);
        return 'success';
    }

    @Post('animal')
    @ApiResponseType(AnimalPresenter, true)
    async addAnimal(@Body() addAnimalDto: AddAnimalDto) {
        const { content } = addAnimalDto;
        const animalCreated = await this.addAnimalUsecases.execute(content);
        return new AnimalPresenter(animalCreated);
    }
}
