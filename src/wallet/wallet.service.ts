import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from './wallet.schema';

@Injectable()
export class WalletService {
  constructor(@InjectModel('Wallet') private walletModel: Model<Wallet>) {}

  private async getOrCreate(userId: string) {
    return this.walletModel.findOneAndUpdate(
      { userId },
      { $setOnInsert: { balance: 0 } },
      { upsert: true, new: true },
    );
  }

  async balance(userId: string) {
    const wallet = await this.getOrCreate(userId);
    return wallet.balance;
  }

  async deposit(userId: string, amount: number) {
    const wallet = await this.getOrCreate(userId);
    wallet.balance += amount;
    await wallet.save();
    return wallet.balance;
  }

  async withdraw(userId: string, amount: number) {
    const wallet = await this.getOrCreate(userId);
    if (wallet.balance < amount) {
      throw new BadRequestException('Insufficient funds');
    }
    wallet.balance -= amount;
    await wallet.save();
    return wallet.balance;
  }
}
