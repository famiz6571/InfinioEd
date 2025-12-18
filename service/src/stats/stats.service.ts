import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { fn, col } from 'sequelize';
import { Menu } from '../menu/menu.model';
import { User } from '../user/user.model';

@Injectable()
export class StatsService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(Menu) private menuModel: typeof Menu,
  ) {}

  // Get total counts of users and menus
  async getCounts() {
    const userCount = await this.userModel.count();
    const menuCount = await this.menuModel.count();
    return { userCount, menuCount };
  }
}
