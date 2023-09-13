import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Analytics } from './analytics.model';
import { Model } from 'mongoose';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel(Analytics.name)
    private readonly analyticsModel: Model<Analytics>,
  ) {}

  async recordPageView(analyticsData: Analytics) {
    const pageView = new this.analyticsModel(analyticsData);
    return await pageView.save();
  }

  async totalPageViews() {
    return await this.analyticsModel.countDocuments();
  }
}
