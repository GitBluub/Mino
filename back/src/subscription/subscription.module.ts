import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subscription } from './models/subscription.model';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [SequelizeModule.forFeature([Subscription]), ConfigModule],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  exports: [SequelizeModule, SubscriptionService],
})
export class SubscriptionModule {}
