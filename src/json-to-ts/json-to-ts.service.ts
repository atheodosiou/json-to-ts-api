import { Injectable } from '@nestjs/common';
import * as jsonToTs from 'json-to-ts';
import { Conversion } from './json-to-ts.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class JsonToTsService {
  private readonly JsonToTS = jsonToTs.default;
  constructor(
    @InjectModel(Conversion.name) private conversionModel: Model<Conversion>,
  ) {}

  async generateTSfromJSON(
    jsonData: string,
    request: Request,
    rootName = 'RootObject',
  ) {
    try {
      const result = this.JsonToTS(jsonData, { rootName });
      const newConversion = new this.conversionModel({
        host: request.headers.host,
        userAgent: request.headers['user-agent'],
      });
      await newConversion.save();
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
