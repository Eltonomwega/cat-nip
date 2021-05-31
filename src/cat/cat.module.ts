import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, catSchema } from 'src/models/cats.model';
import { CatResolver } from './cat.resolver';
import { CatService } from './cat.service';

@Module({
  imports : [MongooseModule.forFeature([{name: Cat.name , schema: catSchema}])],
  providers: [CatResolver, CatService]
})
export class CatModule {}
