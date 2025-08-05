import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('wallet')
@UseGuards(JwtAuthGuard)
export class WalletController {
  constructor(private walletService: WalletService) {}

  @Get('balance')
  async getBalance(@Req() req) {
    const balance = await this.walletService.balance(req.user.sub);
    return { balance };
  }

  @Post('deposit')
  async deposit(@Req() req, @Body('amount') amount: number) {
    const balance = await this.walletService.deposit(req.user.sub, amount);
    return { balance };
  }

  @Post('withdraw')
  async withdraw(@Req() req, @Body('amount') amount: number) {
    const balance = await this.walletService.withdraw(req.user.sub, amount);
    return { balance };
  }
}
