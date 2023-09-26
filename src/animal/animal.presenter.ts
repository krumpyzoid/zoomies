import { ApiProperty } from '@nestjs/swagger';
import { AnimalM } from './model/animal';

export class AnimalPresenter {
    @ApiProperty()
    id: string;
    @ApiProperty()
    content: string;
    @ApiProperty()
    isDone: boolean;
    @ApiProperty()
    createdate: Date;
    @ApiProperty()
    updateddate: Date;

    constructor(animal: AnimalM) {
        this.id = animal.id;
        this.updateddate = animal.updatedDate;
    }
}
