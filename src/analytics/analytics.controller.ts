import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AnalyticsService } from './analytics.service';
import { Analytics } from './analytics.model';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('page-views')
  async getTotalPageViews() {
    const pageViews = await this.analyticsService.totalPageViews();
    return { pageViews };
  }

  @Post('record-page-view')
  async recordPageView(@Body() analyticsData: Analytics) {
    try {
      await this.analyticsService.recordPageView(analyticsData);
      return { message: 'New page view added!' };
    } catch (e) {
      if (e?.code === 11000) {
        return { message: 'Page view already exists' };
      } else {
        return { error: { ...e } };
      }
    }
  }
}
