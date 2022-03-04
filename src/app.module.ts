import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardModule } from './board.module';

@Module({
  imports: [BoardModule, MongooseModule.forRoot('mongodb://localhost/test')],
})
export class AppModule {}
