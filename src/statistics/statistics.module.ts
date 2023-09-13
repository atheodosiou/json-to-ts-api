import { Module } from '@nestjs/common';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Conversion, ConversionSchema } from 'src/json-to-ts/json-to-ts.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Conversion.name, schema: ConversionSchema },
    ]),
  ],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
