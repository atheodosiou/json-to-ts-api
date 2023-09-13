import { Module } from '@nestjs/common';
import { JsonToTsController } from './json-to-ts.controller';
import { JsonToTsService } from './json-to-ts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Conversion, ConversionSchema } from './json-to-ts.model';

@Module({
  controllers: [JsonToTsController],
  imports: [
    MongooseModule.forFeature([
      { name: Conversion.name, schema: ConversionSchema },
    ]),
  ],
  providers: [JsonToTsService],
})
export class JsonToTsModule {}
