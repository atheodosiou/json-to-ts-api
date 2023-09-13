import { Body, Controller, Post, Req } from '@nestjs/common';
import { JsonToTsService } from './json-to-ts.service';
import { Request } from 'express';

@Controller('json-to-ts')
export class JsonToTsController {
  constructor(private readonly jsonToTsService: JsonToTsService) {}

  @Post()
  async generateTypes(@Body() jsonData: any, @Req() request: Request) {
    return this.jsonToTsService.generateTSfromJSON(jsonData, request);
  }
}
