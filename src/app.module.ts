import { Module } from '@nestjs/common';
import { JsonToTsModule } from './json-to-ts/json-to-ts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StatisticsModule } from './statistics/statistics.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/json-to-ts'),
    JsonToTsModule,
    StatisticsModule,
    AnalyticsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
