import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';
import { Menu } from '../menu/menu.model';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleResponse } from './dto/role-response.interface';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role) private roleModel: typeof Role,
    @InjectModel(Menu) private menuModel: typeof Menu,
  ) {}

  async findAll(): Promise<Role[]> {
    return this.roleModel.findAll({ include: [Menu] });
  }

  async findOne(roleId: string): Promise<Role> {
    const role = await this.roleModel.findByPk(roleId, { include: [Menu] });
    if (!role) throw new NotFoundException('Role not found');
    return role;
  }

  async create(dto: CreateRoleDto): Promise<RoleResponse> {
    const role = await this.roleModel.create(dto as Role);

    if (dto.menuIds && dto.menuIds.length) {
      const menus = await this.menuModel.findAll({
        where: { menuId: dto.menuIds },
      });
      await role.$set('menus', menus);
    }

    const fullRole = await this.findOne(role.roleId);

    return {
      role: fullRole,
      status: 'success',
      message: 'Role created successfully',
    };
  }

  async update(roleId: string, dto: UpdateRoleDto): Promise<RoleResponse> {
    const role = await this.findOne(roleId);
    await role.update(dto);

    if (dto.menuIds) {
      const menus = await this.menuModel.findAll({
        where: { menuId: dto.menuIds },
      });
      await role.$set('menus', menus);
    }

    const updatedRole = await this.findOne(roleId);

    return {
      role: updatedRole,
      status: 'success',
      message: 'Role updated successfully',
    };
  }
}
