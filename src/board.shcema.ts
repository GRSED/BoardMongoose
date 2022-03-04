import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoardDocument = Board & Document;

@Schema()
export class Board {
  @Prop()
  board_no: number;

  @Prop()
  board_title: string;

  @Prop()
  board_content: string;

  @Prop({ default: new Date() })
  board_date: Date;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
