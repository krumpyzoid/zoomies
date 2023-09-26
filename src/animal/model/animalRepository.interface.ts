import { AnimalM } from './animal';

export interface AnimalRepository {
    insert(animal: AnimalM): Promise<AnimalM>;
    findAll(): Promise<AnimalM[]>;
    findById(id: string): Promise<AnimalM>;
    updateContent(id: string, isDone: boolean): Promise<void>;
    deleteById(id: string): Promise<void>;
}
