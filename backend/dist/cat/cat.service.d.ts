import { Model } from 'mongoose';
import { catInput } from 'src/dto/cat.dto';
import { Cat } from 'src/models/cats.model';
export declare class CatService {
    private catModel;
    constructor(catModel: Model<Cat>);
    createCat(createCat: catInput): Promise<Cat>;
    findCat(id: string): Promise<Cat>;
    findAll(): Promise<Cat[]>;
    updateCat(id: string, cat: Partial<catInput>): Promise<Cat>;
    deleteCat(id: string): Promise<Cat>;
}
