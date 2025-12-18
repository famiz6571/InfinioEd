import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Menu } from '../menu/menu.model';
import { RoleMenu } from './role-menu.model';
import { Role } from './role.model';
import { User } from '../user/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Role, Menu, RoleMenu, User])],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
