import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardModule } from './notice/notices.module';

@Module({
  imports: [
    BoardModule,
    MongooseModule.forRoot('mongodb://localhost/sorizava'),
  ],
})
export class AppModule {}
