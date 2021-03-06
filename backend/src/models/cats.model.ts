import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cat extends Document {

  @Prop()
  id: string;
  
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const catSchema = SchemaFactory.createForClass(Cat);
