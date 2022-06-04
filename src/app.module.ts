import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BoardModule } from './notice/notices.module';

@Module({
  imports: [
    BoardModule,
    MongooseModule.forRoot('mongodb://localhost/test'),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'apidoc') }),
  ],
})
export class AppModule {}
