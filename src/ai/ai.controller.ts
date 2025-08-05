import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { AiService } from './ai.service';

@UseGuards(JwtAuthGuard)
@Controller('ai')
export class AiController {
  constructor(private service: AiService) {}

  @Post('dynamic-price')
  dynamicPrice(@Body() body: { basePrice: number }) {
    return this.service.dynamicPrice(body.basePrice);
  }

  @Get('recommendation')
  recommendation() {
    return this.service.recommend();
  }
}
