import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnalyticsDocument = HydratedDocument<Analytics>;

@Schema()
export class Analytics {
  @Prop({ type: String, required: true })
  ip: string;

  @Prop({ type: String, required: true })
  browserName: string;

  @Prop({ type: String, required: true })
  os: string;

  @Prop({ type: String, required: true })
  browserVersion: string;

  @Prop({ type: String, required: true })
  type: string;
}

export const AnalyticsSchema = SchemaFactory.createForClass(Analytics);

// Define a compound index on the desired fields for uniqueness
AnalyticsSchema.index(
  {
    ip: 1,
    browserName: 1,
    os: 1,
    browserVersion: 1,
    type: 1,
  },
  {
    unique: true, // Ensure uniqueness
  },
);
