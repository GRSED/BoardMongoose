import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticeController } from './notices.controller';
import { NoticeService } from './notices.service';
import { Notice, NoticeSchema } from './schema/notices.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Notice.name, schema: NoticeSchema }]),
  ],
  controllers: [NoticeController],
  providers: [NoticeService],
})
export class BoardModule {}
