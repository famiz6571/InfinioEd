import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { Menu } from '../menu/menu.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Menu])],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
