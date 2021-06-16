import { Field,Int, InputType, ObjectType, ID } from '@nestjs/graphql';


@InputType()
export class catInput {
  
  @Field()
  name: string;

  @Field(()=>Int)
  age: number;

  @Field()
  breed: string;
}

@ObjectType()
export class catType{

  @Field(()=>ID)
  _id: string;
  
  @Field()
  name: string;

  @Field(()=>Int)
  age: number;

  @Field()
  breed: string;
}

