import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoticeDocument = Notice & Document;

@Schema()
export class Notice {
  @Prop()
  category: string;

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop({ default: new Date() })
  writeDate: Date;

  @Prop({ default: new Date() })
  noticeDate: Date;

  @Prop()
  writer: string;

  @Prop()
  fileUrl: string;

  @Prop()
  importance: boolean;

  @Prop()
  right: string;

  @Prop({ default: false })
  flag: boolean;
}

export const NoticeSchema = SchemaFactory.createForClass(Notice);
