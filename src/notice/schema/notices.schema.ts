import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoticeDocument = Notice & Document;

@Schema()
export class Notice {
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
  importance: number;

  @Prop({ default: 1 })
  isOpen: number;
}

export const NoticeSchema = SchemaFactory.createForClass(Notice);
