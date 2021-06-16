import { catInput } from 'src/dto/cat.dto';
import { Cat } from 'src/models/cats.model';
import { CatService } from './cat.service';
export declare class CatResolver {
    private catsService;
    constructor(catsService: CatService);
    hello(): Promise<string>;
    cats(): Promise<Cat[]>;
    findcat(id: string): Promise<Cat>;
    createCats(input: catInput): Promise<Cat>;
    deleteCat(id: string): Promise<Cat>;
    updateCat(id: string, cat: catInput): Promise<Cat>;
}
