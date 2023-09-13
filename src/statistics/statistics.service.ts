import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Conversion } from 'src/json-to-ts/json-to-ts.model';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectModel(Conversion.name) private conversionModel: Model<Conversion>,
  ) {}

  async getConversions() {
    return this.conversionModel.find();
  }

  async getTotalConversions() {
    return this.conversionModel.countDocuments();
  }

  async getConversionsByDate() {
    return this.conversionModel.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%d-%m-%Y', date: '$date' } },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          date: '$_id',
          count: 1,
          _id: 0,
        },
      },
      {
        $sort: { date: 1 },
      },
    ]);
  }
}
