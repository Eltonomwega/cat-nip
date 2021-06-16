import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { catInput, catType } from 'src/dto/cat.dto';
import { Cat } from 'src/models/cats.model';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async createCat(createCat: catInput): Promise<Cat> {
    const createdCat = new this.catModel(createCat);
    return createdCat.save();
  }

  async findCat(id: string): Promise<Cat> {
    return this.catModel.findById(id);
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async updateCat(id: string, cat: Partial<catInput>): Promise<Cat> {
    const newCat = await this.catModel.findByIdAndUpdate(id, cat);
    newCat.save();
    return this.catModel.findById(id);
  }

  async deleteCat(id: string): Promise<Cat> {
    return this.catModel.findByIdAndDelete(id);
  }
}
