import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateAnimalDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsNumber()
    readonly id: string;
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsBoolean()
    readonly isDone: boolean;
}

export class AddAnimalDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    readonly content: string;
}
