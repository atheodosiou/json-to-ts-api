import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('conversions')
  async getConversions() {
    return this.statisticsService.getConversions();
  }
  @Get('conversions/total')
  async getTotalConversions() {
    const total = await this.statisticsService.getTotalConversions();
    return { totalConversions: total };
  }

  @Get('conversions/by-date')
  async getConversionsByDate() {
    return this.statisticsService.getConversionsByDate();
  }
}
