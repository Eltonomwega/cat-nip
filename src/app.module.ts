import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';

const mongoUrl = 'mongodb://127.0.0.1:27017/Catnip'

@Module({
  imports: [
    CatModule,
    GraphQLModule.forRoot({
      playground:true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      
    }),
    MongooseModule.forRoot(mongoUrl),
    CatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
