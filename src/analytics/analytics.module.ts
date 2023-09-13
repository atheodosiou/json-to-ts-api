import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Analytics, AnalyticsSchema } from './analytics.model';

@Module({
  controllers: [AnalyticsController],
  imports: [
    MongooseModule.forFeature([
      { name: Analytics.name, schema: AnalyticsSchema },
    ]),
  ],
  providers: [AnalyticsService],
})
export class AnalyticsModule {}
