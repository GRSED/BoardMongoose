import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardModule } from './notice/notice.module';

@Module({
  imports: [BoardModule, MongooseModule.forRoot('mongodb://localhost/test')],
})
export class AppModule {}
