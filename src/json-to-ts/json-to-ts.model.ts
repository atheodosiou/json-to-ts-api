import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ConversionDocument = HydratedDocument<Conversion>;

@Schema()
export class Conversion {
  @Prop({ type: String, required: true })
  userAgent: string;

  @Prop({ type: String, required: true })
  host: number;

  @Prop({ type: Date, default: new Date() })
  date: Date;
}

export const ConversionSchema = SchemaFactory.createForClass(Conversion);
