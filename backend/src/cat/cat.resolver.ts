import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { catInput, catType } from 'src/dto/cat.dto';
import { Cat } from 'src/models/cats.model';
import { CatService } from './cat.service';

@Resolver()
export class CatResolver {
  constructor(private catsService: CatService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [catType])
  async cats() {
    return this.catsService.findAll();
  }

  @Query(() => catType)
  async findcat(@Args('id') id: string) {
    return this.catsService.findCat(id);
  }

  @Mutation(() => catType)
  async createCats(@Args('input') input: catInput) {
    return this.catsService.createCat(input);
  }

  @Mutation(() => catType)
  async deleteCat(@Args('input') id: string) {
    return this.catsService.deleteCat(id);
  }

  @Mutation(() => catType)
  async updateCat(
    @Args('id') id: string,
    @Args('cat') cat: catInput
  ) {
    return this.catsService.updateCat(id,cat);
  }
}